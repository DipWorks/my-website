import { Blockquote, Card, Heading } from "@radix-ui/themes";
import React from "react";
import { lobsterTwoFont } from "../util/fonts";

const Skills = () => {
  return (
    <Card className="mr-4">
      <Heading className={`${lobsterTwoFont.className} pb-4 pt-2`}>
        Skills
      </Heading>
      <Blockquote>
        <strong>Laguages </strong>
        <br />
        Java, JavaScript, Typescript, Html5, CSS3
      </Blockquote>
      <br />
      <Blockquote>
        <strong>Frameworks </strong>
        <br />
        SPRING BOOT, REACT, Next.js, Node.js
      </Blockquote>
      <br />
      <Blockquote>
        <strong>Tools </strong>
        <br />
        Microservice with Spring Boot, Terraform, <br /> AWS SAM Templates, AWS
        CloudFormation,
        <br />
        AWS Serverless Architecutre, AWS ECS, <br /> Git Lab Version Control,
        JUnit Testing, <br /> Radix UI, Tailwind CSS, Styled Components, <br/>UNIX/LINUX Servers
      </Blockquote>
    </Card>
  );
};

export default Skills;
