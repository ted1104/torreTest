import React from "react";

// Component importation
// import classe from "./users_skills.module.css";
import animation from "../../utilities/css/animation.module.css";
import { SkillDetails, UserProfile } from "../../components";
import icons from "../../constants/icons";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectSysMenu } from "../../redux/sys/sys.selectors";
import { setDisplay } from "../../redux/sys/sys.action";
import images from "../../constants/images";

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
          list: [
            "Software development",
            "Team Management",
            "Github",
            "API",
            "Agile",
            "Functional programming",
            "Reactive Programming",
            "Unit testing",
            "Data analysis",
          ],
        },
        {
          description: "No experience, but interested",
          icon: icons.monitor,
          list: [
            "GIT",
            "Team Management",
            "Github",
            "API",
            "Agile",
            "Scala",
            "Vue.js",
            "React JS",
            "React Native",
          ],
        },
      ],

      related_experiences: [
        {
          title: "Founding Member of Tech Lead",
          company: "Mediabox",
          duration: "Feb 2015 - Dec 2017",
        },
        {
          title: "Lead Developer",
          company: "Connectis",
          duration: "Feb 2015 - Dec 2017",
        },
        {
          title: "Full Stack Developer",
          company: "Novitlife LTD",
          duration: "Feb 2019 - Dec 2020",
        },
        {
          title: "IT Manager",
          company: "Solidec",
          duration: "Feb 2019 - Dec 2020",
        },
      ],

      people_skills: [
        {
          pic: images.profile_03,
          name: "Thibert Patrick",
          position: "Mobile Developer",
        },
        {
          pic: images.profile_02,
          name: "Titien NK",
          position: "Web Developer",
        },
        {
          pic: images.profile_01,
          name: "Rebecca Mub",
          position: "Software Engeneer",
        },
      ],
    };
  }
  render() {
    const { skills, related_experiences, people_skills } = this.state;
    const { sysMenu } = this.props;

    return (
      <div className={animation.animationContainer}>
        {!sysMenu ? (
          <UserProfile skills={skills} />
        ) : (
          <SkillDetails data={this.state} />
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setShowMenu: (data) => dispatch(setDisplay(data)),
});
const mapStateToProps = createStructuredSelector({
  sysMenu: selectSysMenu,
});

export default connect(mapStateToProps, mapDispatchToProps)(UserSkill);
