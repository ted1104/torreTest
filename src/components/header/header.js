import React from "react";
import classe from "./header.module.css";
import icons from "../../constants/icons";
import { Container } from "../../hoc";

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
          <div>
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

export { header };
