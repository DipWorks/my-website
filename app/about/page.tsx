import { Blockquote, Card } from "@radix-ui/themes";
import React from "react";
import { Metadata } from "next";
import ProfileImage from "../components/ProfileImage";
import PortfolioButton from "../components/PortfolioButton";

export const metadata: Metadata = {
  title: "Dipendra Bhandari",
};

const AboutPage = () => {
  return (
    <Card className="mr-4 flex flex-col items-center text-center">
      <Blockquote size="4" color="orange" highContrast className="mb-6">
        My name is <strong>Dipendra Bhandari</strong> and I am a{" "}
        <strong>Senior Software Engineer </strong>
        based in Sydney, Australia.
        <br />
        <br />I decided to create this website to write blogs related to
        software development and software engineering in general. I try to shed
        light on simple things that everybody else has ignored but that are
        still making life of Software Engineer difficult. I write articles or
        tutorials on stuff that is hard to find on the internet but would make
        our life so much easier if somebody wrote about the before. 😊
      </Blockquote>
      <ProfileImage />
      <div className="flex flex-col items-center">
        <PortfolioButton />
      </div>
    </Card>
  );
};

export default AboutPage;
