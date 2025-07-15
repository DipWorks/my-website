import { Blockquote, Card, Heading } from "@radix-ui/themes";
import React from "react";
import { lobsterTwoFont } from "../utils/fonts";

const Qualifications = () => {
  return (
    <Card className="lg:ml-4 mb-3">
      <Heading className={`${lobsterTwoFont.className} pb-4 pt-2`}>
        Qulifications
      </Heading>
      <Blockquote>
        <strong>
          Master of Information Techonology - CQU, Sydeny, Australia
        </strong>{" "}
        <br />
        (Major: Software Design and Development)
      </Blockquote>{" "}
      <br />
      <Blockquote>
        <strong>
          Bachelors in Electronics and Communication Engineering - TU, Nepal
        </strong>
        <br /> (Major Project: Door security system using Face Recognition in
        Matlab)
      </Blockquote>
    </Card>
  );
};

export default Qualifications;
