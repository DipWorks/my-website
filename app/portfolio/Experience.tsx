import { Blockquote, Card, Heading } from "@radix-ui/themes";
import React from "react";
import { lobsterTwoFont } from "../util/fonts";

const Experience = () => {
  return (
    <Card className="mr-4">
      <Heading className={`${lobsterTwoFont.className} pb-4 pt-2`}>
        Experience
      </Heading>
      <Blockquote>
        <strong>
          Senior Software Engineer - DCS, NSW Government, Sydney, Australia{" "}
        </strong>
        <br />
        (from 17 May 2021 to current)
      </Blockquote>
      <br />
      <Blockquote>
        <strong>
          Information Technology Officer - Sharada Municipality, Salyan,
          Nepal{" "}
        </strong>
        <br />
        (from 1 June 2017 to 31 June 2018)
      </Blockquote>
      <br />
      <Blockquote>
        <strong>
          C Programming Teacher - Sharada Higher Secondary School, Salyan,
          Nepal{" "}
        </strong>
        <br />
        (from 1 Jan 2018 to 31 June 2018)
      </Blockquote>
    </Card>
  );
};

export default Experience;
