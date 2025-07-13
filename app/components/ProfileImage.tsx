import { Text } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";

const ProfileImage = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-50 h-50 md:w-75 md:h-75 lg:w-100 lg:h-100 rounded-full overflow-hidden mt-4">
        <Image
          src="/profile.png"
          alt="author pic: Dipendra Bhandari"
          fill
          className="object-cover"
        />
      </div>

      <Text color="crimson" highContrast weight="medium" size="4" mb="1" mt="3">
        Dipendra Bhandari
      </Text>
      <Text>Senior Software Engineer at Nsw Gov, Sydney, Australia</Text>
    </div>
  );
};

export default ProfileImage;
