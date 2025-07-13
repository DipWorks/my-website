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
        My name is <strong>Dipendra Bhandari</strong> and I am{" "}
        <strong>Senior Software Engineer </strong>
        based in Sydney by profession and I am also a passionate Manchester
        United fan. I decided to build this web application as a way of giving
        something back to the MUFC fan community. I want this page to be a{" "}
        <strong>central hub for all the Manchester United fans </strong> around
        the globe. I plan to make those features available to MUFC fans that I
        wish were available as a keen Manchester United supporter myself.
        <br />
        <br /> For a start, you can read all the latest news from all the
        reliable sources about our football club in one place. I am planning to
        add features like forums which allow you to engage in discussions if you
        want by posting your own opinios about anything related to MUFC while
        being able to show your support and reaction to any other content
        diplayed on this web page. And also, you can get involved by voting in
        polls about different topics concerning MUFC that will be conducted
        regularly and see their the results.
        <br />
        And finally, you will be able to read my own views on different topics
        regarding MUFC via blog posts. I am planning to add features one by one
        to this app, so stay tuned in. Based on the reaction of the community
        and demand of these features I will prioritise them keep growing this
        web page to make it more and more useful for us{" "}
        <strong>Red Devils </strong> around the globe.
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
