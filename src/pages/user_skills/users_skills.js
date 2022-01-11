import React from "react";

// Component importation
// import classe from "./users_skills.module.css";
import { SkillDetails, UserProfile } from "../../components";
import icons from "../../constants/icons";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectSysMenu } from "../../redux/sys/sys.selectors";

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

      showDetails: true,
    };
  }

  _showDetails = () => {
    this.setState({
      showDetails: !this.state.showDetails,
    });
  };

  render() {
    const { skills, showDetails } = this.state;
    console.log(this.props);
    return (
      <div>
        {showDetails ? <UserProfile skills={skills} /> : <SkillDetails />}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  sysMenu: selectSysMenu,
});

export default connect(mapStateToProps)(UserSkill);
