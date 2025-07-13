import { Card, Heading } from "@radix-ui/themes";
import React from "react";
import MufcFanHub from "./MufcFanHub";

const Projects = () => {
  return (
    <Card className="mr-4 mt-8 flex flex-col items-center text-center">
      <Heading className="p-4">Personal Projects (Hobbies)</Heading>
      <div className="flex flex-row">
        <MufcFanHub />
      </div>
    </Card>
  );
};

export default Projects;
