import React from "react";
import classe from "./tag.module.css";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectSysMenu } from "../../redux/sys/sys.selectors";
import { setDisplay } from "../../redux/sys/sys.action";

const tag = ({ name, ...props }) => {
  return (
    <div
      className={classe.container_tag}
      onClick={() =>
        props.setDisplay({
          showMenu: !props.sysMenu,
          details: { title_skill: name, proficient: "papap" },
        })
      }
    >
      <span>{name}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setDisplay: (data) => dispatch(setDisplay(data)),
});
const mapStateToProps = createStructuredSelector({
  sysMenu: selectSysMenu,
});

export default connect(mapStateToProps, mapDispatchToProps)(tag);
