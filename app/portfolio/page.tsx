import { Card } from "@radix-ui/themes";
import React from "react";
import ProfileImage from "../components/ProfileImage";
import Qualifications from "./Qualifications";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";

const Portfolio = () => {
  return (
    <Card className="mr-4 flex flex-col items-center text-center">
      <div className="flex flex-row">
        <Experience />
        <ProfileImage />
        <Qualifications />
        <Skills />
      </div>
      <Projects />
    </Card>
  );
};

export default Portfolio;
