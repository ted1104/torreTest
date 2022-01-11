import React from "react";

// Component importation
import classe from "./users_skills.module.css";
import { Header, Profile } from "../../components";

class UserSkill extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className={classe.user_profile}>
          <div>
            <Profile />
          </div>
          <div>
            <span>Teddy Nkubonage Walter</span>
            <span>Full Stack Web Developer</span>
          </div>
        </div>
      </div>
    );
  }
}

export { UserSkill };
