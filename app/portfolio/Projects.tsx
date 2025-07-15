import { Card, Heading } from "@radix-ui/themes";
import React from "react";
import MufcFanHub from "./MufcFanHub";
import ContactInfo from "./ContactInfo";

const Projects = () => {
  return (
    <Card className="mr-4 mt-8 flex flex-col items-center text-center">
      <Heading className="p-4">Personal Projects (Hobbies)</Heading>
      <div className="flex flex-col sm:flex-row">
        <MufcFanHub />
        <ContactInfo />
      </div>
    </Card>
  );
};

export default Projects;
