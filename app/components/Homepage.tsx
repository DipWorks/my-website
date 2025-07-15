import { Card, Text } from "@radix-ui/themes";
import React from "react";
import Intro from "./Intro";
import { lobsterTwoFont } from "../utils/fonts";

const Homepage = () => {
  return (
    <Card className="mr-4 flex flex-col items-center text-center">
      <Text className={`${lobsterTwoFont.className} text-3xl`}>
        Let&apos;s build the baby blocks of a better future with{" "}
      </Text>
      <Intro />
    </Card>
  );
};

export default Homepage;
