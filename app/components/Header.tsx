import { Text } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex h-[12vh] items-center p-2 bg-neutral">
      <div className="pl-2">
        <div className="flex flex-col">
          <Link
            href="/"
            className="text-3xl md:text-5xl lg:text-5xl  text-white hover:text-orange-400 transition-colors
      
      
      "
          >
            Dipendra Bhandari
          </Link>
          <Text className="text-slate-100">Senior Software Engineer</Text>
        </div>
      </div>
    </div>
  );
};

export default Header;
