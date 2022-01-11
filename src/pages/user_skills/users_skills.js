import React from "react";

// Component importation
import classe from "./users_skills.module.css";
import { Header, Profile, Skill } from "../../components";
import icons from "../../constants/icons";

class UserSkill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [
        {
          description: "Master/Influencer",
          icon: icons.monitor,
          list: ["Software development", "Team Management"],
        },
        {
          description: "Proficient",
          icon: icons.monitor,
          list: [
            "Unit testing",
            "Data analysis",
            "Functional programming",
            "Reactive Programming",
          ],
        },
        {
          description: "Novice",
          icon: icons.monitor,
          list: ["Software development", "Team Management"],
        },
        {
          description: "No experience, but interested",
          icon: icons.monitor,
          list: ["GIT", "Team Management", "Github"],
        },
      ],
    };
  }

  render() {
    const { skills } = this.state;
    return (
      <div>
        <Header />
        <div className={classe.user_profile}>
          <div>
            <Profile />
          </div>

          {/* name and position */}
          <div>
            <span>Teddy Nkubonage Walter</span>
            <span>Full Stack Web Developer</span>
          </div>

          {/* skuill details */}
        </div>
        <div className={classe.user_skills}>
          <span className={classe.big_title}>Skills and interests :</span>
          <div className={classe.container_skills}>
            {skills.map((item, index) => (
              <Skill item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export { UserSkill };
