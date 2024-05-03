import { useEffect } from "react";
import sal from "sal.js";
import HumanasTeam from "./HumanasTeam";
import Candidates from "./Candidates";
import HrProfessionals from "./HrProfessionals";

export default function Community({ communityContent }) {
  const childClass = "tab-content p-0 bg-transparent border-0 border bg-light";
  const isHeading = true;
  const gap = true;

  useEffect(() => {
    sal();
  }, []);

  return (
    <>
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
                            {communityContent.pageName}
                          </span>
                        </h4>
                        <h2 className="title w-600 mb--20">
                          {communityContent.pageTitle}
                        </h2>
                        <p className="description b1">
                          {communityContent.description}
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
                    <HrProfessionals
                      hrProfessionalsContent={communityContent.hrProfessionals}
                    />
                  </div>

                  {/* TEAM */}
                  <div
                    className="tab-pane fade active show"
                    id="nav-team"
                    role="tabpanel"
                    aria-labelledby="nav-team-tab"
                  >
                    <HumanasTeam
                      humanasTeamContent={communityContent.humanasTeam}
                    />
                  </div>

                  {/* CANDIDATES */}
                  <div
                    className="tab-pane fade show"
                    id="nav-cands"
                    role="tabpanel"
                    aria-labelledby="nav-cands-tab"
                  >
                    <Candidates
                      candidatesContent={communityContent.candidates}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
