import React from "react";
import InnerpageHeader from "../general/InnerpageHeader";
import Story from "./Story";
import Vision from "./Vision";


const AboutComponent = () => {
  return (
    <div className="about-page">
      <InnerpageHeader pageTitle={"About Us"} breadcrums={"About Us"} />
      <Story/>
      <Vision/>
    </div>
  );
};

export default AboutComponent;
