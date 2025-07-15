import { lobsterTwoFont } from "@/utils/fonts";
import { Blockquote, Card, Heading } from "@radix-ui/themes";
import React from "react";
import LinkedInButton from "./LinkedInButton";

const ContactInfo = () => {
  return (
    <Card className="ml-4">
      <Heading className={`${lobsterTwoFont.className} pb-4 pt-2`}>
        Contact Me
      </Heading>
      <Blockquote>
        <strong>Email: </strong>
        bhandaridipenra94@gmail.com
        <br />
        <strong>Phone: </strong>0449001994
        <br />
      </Blockquote>
      <LinkedInButton />
    </Card>
  );
};

export default ContactInfo;
