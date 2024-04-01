import PageHead from "../Head";
import Context from "@/context/Context";
import Header from "@/components/Header/Header";
import PopupMobileMenu from "@/components/Header/PopupMobileMenu";
import Footer from "@/components/Footer/Footer";
import Copyright from "@/components/Footer/Copyright";
import TeamMember from "@/components/Community/TeamMember";
import Split from "@/components/Split/Split";
import Image from "next/image";
import Link from "next/link";
import sal from "sal.js";
import { useEffect } from "react";

// export async function getStaticProps() {
//   const apiUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/team-members?populate=picture`;
//   try {
//     const res = await fetch(apiUrl, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
//       },
//     });
//     console.log("Response", res);
//     if (!res.ok) {
//       throw new Error(`Failed to fetch, status: ${res.status}`);
//     }
//     const teamMembers = await res.json();
//     return {
//       props: {
//         teamMembers,
//       },
//     };
//   } catch (error) {
//     console.error("Fetching error:", error.message);
//     return {
//       props: {
//         teamMembers: [],
//       },
//     };
//   }
// }

export default function Community(props) {
  const { teamMembers } = props;
  // console.log("teamMembers", teamMembers);

  const parentClass = "col-xl-3 col-lg-6 col-md-6 col-12";
  const childClass = "tab-content p-0 bg-transparent border-0 border bg-light";
  const isHeading = true;
  const gap = true;
  useEffect(() => {
    sal();
  }, []);

  return (
    <>
      <PageHead title="Community" />

      <main className="page-wrapper">
        <Context>
          {/* <HeaderTop /> */}
          <Header
            headerTransparent="header-not-transparent"
            headerSticky="header-sticky"
            btnClass="btn-small round"
          />
          <PopupMobileMenu />

          <div>
            <div className="rainbow-gradient-circle"></div>
            <div className="rainbow-gradient-circle theme-pink"></div>
          </div>
          <>
            <div className="main-content">
              <div
                className={`rainbow-pricing-area ${
                  gap ? "rainbow-section-gap rainbow-section-gapTop-big" : ""
                }`}
              >
                <div className="container">
                  <div className="wrapper">
                    <div className="row">
                      <div className="col-lg-12">
                        {isHeading ? (
                          <div
                            className="section-title text-center"
                            data-sal="slide-up"
                            data-sal-duration="400"
                            data-sal-delay="150"
                          >
                            <h4 className="subtitle">
                              <span className="theme-gradient">
                                Humanas Community
                              </span>
                            </h4>
                            <h2 className="title w-600 mb--20">
                              Together Stronger
                            </h2>
                            <p className="description b1">
                              HR Professionals, Humanas Team and Candidates are
                              three main components of our Community. We believe
                              a happy work environment is crucial for a happy
                              life. So we are.
                            </p>
                          </div>
                        ) : (
                          ""
                        )}

                        <nav className="chatenai-tab">
                          <div
                            className="tab-btn-grp nav nav-tabs mb-3 text-center justify-content-center"
                            id="nav-tab"
                            role="tablist"
                          >
                            <button
                              className="nav-link"
                              id="nav-hrs-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-hrs"
                              type="button"
                              role="tab"
                              aria-controls="nav-hrs"
                              aria-selected="true"
                            >
                              HR Professionals
                            </button>
                            <button
                              className="nav-link active"
                              id="nav-team-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-team"
                              type="button"
                              role="tab"
                              aria-controls="nav-team"
                              aria-selected="true"
                            >
                              Humanas Team
                            </button>
                            <button
                              className="nav-link"
                              id="nav-cands-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-cands"
                              type="button"
                              role="tab"
                              aria-controls="nav-cands"
                              aria-selected="false"
                            >
                              Candidates
                              {/* <span className="rainbow-badge-card badge-border">
                          20% Off
                        </span> */}
                            </button>
                          </div>
                        </nav>
                      </div>
                    </div>

                    <div className={childClass} id="nav-tabContent">
                      {/* HR PROFESSIONALS */}
                      <div
                        className="tab-pane fade show"
                        id="nav-hrs"
                        role="tabpanel"
                        aria-labelledby="nav-hrs-tab"
                      >
                        <div className="row row--15 mt_dec--30">
                          <Split>
                            <div
                              className={`row g-0 radius-10 align-items-center`}
                            >
                              <div className="col-lg-12 col-xl-8 col-12">
                                <div className="inner pr--10">
                                  <h4
                                    className="subtitle"
                                    data-sal="slide-up"
                                    data-sal-duration="400"
                                    data-sal-delay="300"
                                  >
                                    <span className="theme-gradient">
                                      HR Professionals
                                    </span>
                                  </h4>
                                  <h4
                                    className="title"
                                    data-sal="slide-up"
                                    data-sal-duration="400"
                                    data-sal-delay="200"
                                  >
                                    Reach potential employee in seconds!
                                  </h4>
                                  <p
                                    className="description"
                                    data-sal="slide-up"
                                    data-sal-duration="400"
                                    data-sal-delay="300"
                                  >
                                    Qualified colleagues are what we all need.
                                    Reach the Meta CV you are looking for in
                                    seconds using advanced filters!
                                  </p>
                                  <p
                                    className="description"
                                    data-sal="slide-up"
                                    data-sal-duration="400"
                                    data-sal-delay="300"
                                  >
                                    - Get the most accurate personality
                                    inventory and professional orientation
                                    results with gamified scientific methods!
                                    <br />
                                    - Thanks to advanced filters, access not
                                    only basic information such as contact info,
                                    proficiency and education, but also
                                    personality and orientation inventories that
                                    reveal the potential of the candidate!
                                    <br />- In order for a Meta CV to be
                                    created, a candidate must spend at least 40
                                    minutes in the app and answer the questions.
                                    Meta CV will be your best partner to really
                                    get to know the candidates.
                                  </p>
                                  <div
                                    className="view-more-button mt--35"
                                    data-sal="slide-up"
                                    data-sal-duration="400"
                                    data-sal-delay="400"
                                  >
                                    <Link
                                      className="btn-default"
                                      href="https://app.humanas.io/register/recruiter"
                                      target="_blank"
                                    >
                                      Let's Start
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12 col-xl-4 col-12">
                                <div className="thumbnail">
                                  <video
                                    width="435"
                                    height="393"
                                    controls={false}
                                    autoPlay
                                    muted
                                    loop
                                    preload
                                    className="radius"
                                  >
                                    <source
                                      src={"/images/steps/2.mp4"}
                                      type="video/mp4"
                                    />
                                    Your browser does not support the video tag.
                                  </video>
                                </div>
                              </div>
                            </div>
                          </Split>
                        </div>
                      </div>
                      {/* TEAM */}
                      {/* <div
                        className="tab-pane fade active show"
                        id="nav-team"
                        role="tabpanel"
                        aria-labelledby="nav-team-tab"
                      >
                        <div className="row row--15 mt_dec--30">
                          {teamMembers.data.map((data, index) => (
                            <TeamMember
                              data={data}
                              key={index}
                              parentClass={parentClass}
                            />
                          ))}
                        </div>
                      </div> */}
                      {/* CANDIDATES */}
                      <div
                        className="tab-pane fade"
                        id="nav-cands"
                        role="tabpanel"
                        aria-labelledby="nav-cands-tab"
                      >
                        <div className="row row--15">
                          <Split>
                            <div
                              className={`row g-0 radius-10 align-items-center`}
                            >
                              <div className="col-lg-12 col-xl-8 col-12">
                                <div className="inner pr--10">
                                  <h4
                                    className="subtitle"
                                    data-sal="slide-up"
                                    data-sal-duration="400"
                                    data-sal-delay="300"
                                  >
                                    <span className="theme-gradient">
                                      Candidates
                                    </span>
                                  </h4>
                                  <h4
                                    className="title"
                                    data-sal="slide-up"
                                    data-sal-duration="400"
                                    data-sal-delay="200"
                                  >
                                    Happy work, happy future!
                                  </h4>
                                  <p
                                    className="description"
                                    data-sal="slide-up"
                                    data-sal-duration="400"
                                    data-sal-delay="300"
                                  >
                                    Those who find it challenging to choose a
                                    university, are looking for new jobs, want
                                    to change their job, place or even their
                                    life. Every day, thousands of candidates
                                    take a step closer to their dream job by
                                    unleashing their potential with Lazy Guru.
                                    Maybe today's the day!
                                  </p>
                                  <p
                                    className="description"
                                    data-sal="slide-up"
                                    data-sal-duration="400"
                                    data-sal-delay="300"
                                  >
                                    Dowload our app today and create your Meta
                                    CV! Free, no ads.
                                  </p>

                                  <div
                                    className="view-more-button mt--35"
                                    data-sal="slide-up"
                                    data-sal-duration="400"
                                    data-sal-delay="400"
                                  >
                                    <Link
                                      className="btn-default"
                                      href="https://humanas.io/LazyGuruStore.php"
                                      target="_blank"
                                    >
                                      Let's Start
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12 col-xl-4 col-12">
                                <div className="thumbnail">
                                  <Image
                                    width={1217}
                                    height={1100}
                                    className="radius"
                                    src={"/images/steps/1.jpg"}
                                    alt="split Images"
                                  />
                                </div>
                              </div>
                            </div>
                          </Split>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
          <Footer />
          <Copyright />
        </Context>
      </main>
    </>
  );
}
