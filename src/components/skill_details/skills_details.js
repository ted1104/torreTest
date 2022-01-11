import React from "react";
import classe from "./skills.module.css";

import { Header } from "..";

const skillDetails = () => {
  return (
    <div className={classe.container_details_skills}>
      <Header isDetails />
      <p>DETAILS</p>
    </div>
  );
};

export { skillDetails };
