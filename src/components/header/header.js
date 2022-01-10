import React from "react";
import classe from "./header.module.css";
import icons from "../../constants/icons";

const header = () => {
  return (
    <div className={classe.container_header}>
      {/* LOGO */}
      <div>
        <img src={icons.menu} alt="logo_torre" />
      </div>
      {/* TITRE */}
      <div>
        <span>
          torre <span className={classe.app_name_last}>.co</span>
        </span>
      </div>
      {/* LOGO SEARCH */}
      <div>
        <img src={icons.search} alt="search" />
      </div>
      <div>
        <a href="#">SIGN IN</a>
      </div>
    </div>
  );
};

export { header };
