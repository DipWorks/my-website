import { Blockquote, Card, Heading } from "@radix-ui/themes";
import React from "react";
import { lobsterTwoFont } from "../utils/fonts";
import MufcFanHubButton from "./MufcFanHubButton";

const MufcFanHub = () => {
  return (
    <Card className="ml-4 mb-3">
      <Heading className={`${lobsterTwoFont.className} pb-4 pt-2`}>
        MUFC Fan HUb
      </Heading>
      <Blockquote>
        <strong>
          A reliable online news source for Manchester United fans{" "}
        </strong>{" "}
        <br />
        An application that uses X V2-Api to read the latest news about
        Manchester United,
        <br />
        filters them based on author reliability and displays them in an
        organised way for <br />
        Manchester United fans. <br />
        <br />
        (uses Next.Js, X V2-Api and PostgressDB)
      </Blockquote>
      <MufcFanHubButton />
    </Card>
  );
};

export default MufcFanHub;
