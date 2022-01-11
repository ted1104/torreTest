import React from "react";

// Component importation
// import classe from "./users_skills.module.css";
import { SkillDetails, UserProfile } from "../../components";
import icons from "../../constants/icons";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectSysMenu } from "../../redux/sys/sys.selectors";
import { setDisplay } from "../../redux/sys/sys.action";

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
    const { sysMenu } = this.props;

    return (
      <div>{sysMenu ? <UserProfile skills={skills} /> : <SkillDetails />}</div>
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
