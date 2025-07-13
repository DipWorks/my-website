import { Text } from "@radix-ui/themes";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4 -mt-32">
      <Text color="orange" size="6">
        Not Found
      </Text>
      <Text>Looks like this page does not exist !</Text>
    </div>
  );
};

export default NotFound;
