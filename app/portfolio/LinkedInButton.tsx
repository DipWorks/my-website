import { Button } from "@radix-ui/themes";
import { ExternalLink } from "lucide-react";
import React from "react";

const LinkedInButton = () => {
  return (
    <div className="mt-4">
      <Button color="blue" variant="solid" radius="large">
        <a
          href="https://www.linkedin.com/in/dipendra-bhandari-382a061a5/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect on LinkedIn
        </a>
        <ExternalLink className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default LinkedInButton;
