import React from "react";
import { useContext } from "react";
import DataContext from "@/context/context";

function Team() {
  const { count } = useContext(DataContext);
  return (
    <div className="Team">
      <div className="team_box container">
        <div className="team_left">
          <h3 className="team_title">Team</h3>
          <img src="/team.png" alt="" className="team_extra" />
          <p className="team_text">
            For each project, we form a team that includes a project manager,
            business analyst, UI / UX designer, DevOps, QA engineer, backend and
            front-end developers.
          </p>
          <span className="counter">
            <h6 className="counter_title">{count}</h6>+
          </span>
          <h5 className="team_sub_title"> Dedicated team</h5>
        </div>
        <div className="team_right">
          <img src="/team.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Team;
