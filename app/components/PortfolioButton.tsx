"use client";
import { Button } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import React from "react";

const PortfolioButton = () => {
  const router = useRouter();
  const handleButtonClick = () => {
    router.push("/portfolio");
  };

  return (
    <div className="mt-4">
      <Button color="gray" radius="large" onClick={handleButtonClick}>
        View Portfolio
      </Button>
    </div>
  );
};

export default PortfolioButton;
