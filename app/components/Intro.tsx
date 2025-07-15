import { Blockquote, Text } from "@radix-ui/themes";
import React from "react";
import PortfolioButton from "./PortfolioButton";
import { tekurFont } from "../utils/fonts";

const Intro = () => {
  return (
    <div className="flex flex-col">
      <Text color="orange" className={`${tekurFont.className} text-8xl`}>
        Dipendra Bhandari
      </Text>
      <Blockquote color="orange" size="4" highContrast>
        Senior Software Engnieer at DCS, NSW Government, Sydney
      </Blockquote>
      <PortfolioButton />
    </div>
  );
};

export default Intro;
