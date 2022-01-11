import React from "react";
import classe from "./header.module.css";
import icons from "../../constants/icons";
import { Container } from "../../hoc";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectSysMenu } from "../../redux/sys/sys.selectors";
import { setDisplay } from "../../redux/sys/sys.action";

const header = (props) => {
  const { isDetails } = props;

  return (
    <div className={classe.container_header}>
      {!isDetails ? (
        <Container>
          {/* LOGO */}
          <div>
            <img src={icons.menu} alt="logo_torre" />
          </div>
          {/* TITRE */}
          <div>
            <span>
              torre<span className={classe.app_name_last}>.co</span>
            </span>
          </div>
          {/* LOGO SEARCH */}
          <div>
            <img src={icons.search} alt="search" />
          </div>
          <div>
            <a href="#">SIGN IN</a>
          </div>
        </Container>
      ) : (
        <Container>
          <div onClick={() => props.setDisplay(!props.sysMenu)}>
            <img src={icons.close} alt="close_icon" />
          </div>
          <div>
            <span>Software development</span>
          </div>
        </Container>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setDisplay: (data) => dispatch(setDisplay(data)),
});
const mapStateToProps = createStructuredSelector({
  sysMenu: selectSysMenu,
});

export default connect(mapStateToProps, mapDispatchToProps)(header);
