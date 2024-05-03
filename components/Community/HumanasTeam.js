import TeamMemberCard from "./TeamMemberCard";

const HumanasTeam = ({ humanasTeamContent }) => {
  const parentClass = "col-xl-3 col-lg-6 col-md-6 col-12";
  return (
    <div className="row row--15 mt_dec--30">
      {humanasTeamContent.map((data, index) => (
        <TeamMemberCard data={data} key={index} parentClass={parentClass} />
      ))}
    </div>
  );
};

export default HumanasTeam;
