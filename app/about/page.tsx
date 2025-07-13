import { Blockquote, Card, Text } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";
import { Metadata } from "next";

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
        <br /> 
        I decided to create this website to write blogs related to software development and software engineering in general. I try to shed light on simple things that everybody else has ignored
        but that are still making life of Software Engineer difficult. I write articles or tutorials on stuff that is hard to find on the internet but would make our life so much easier if somebody wrote about the before. 😊
      </Blockquote>

      <div className="flex flex-col items-center">
        <div className="relative w-50 h-50 md:w-75 md:h-75 lg:w-100 lg:h-100 rounded-full overflow-hidden mt-4">
          <Image
            src="/profile.png"
            alt="author pic: Dipendra Bhandari"
            fill
            className="object-cover"
          />
        </div>

        <Text
          color="crimson"
          highContrast
          weight="medium"
          size="4"
          mb="3"
          mt="3"
        >
          Dipendra Bhandari
        </Text>
      </div>
    </Card>
  );
};

export default AboutPage;
