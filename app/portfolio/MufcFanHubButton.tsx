import { Button } from "@radix-ui/themes";
import { ExternalLink } from "lucide-react";
import React from "react";

const MufcFanHubButton = () => {
  return (
    <div className="mt-4">
      <Button color="gray" radius="large">
        <a
          href="https://www.mufcfanhub.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Live Application
        </a>
        <ExternalLink className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default MufcFanHubButton;
