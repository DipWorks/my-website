import { Text } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

const Header = () => {
  return (
    <div className="flex h-[15vh] items-center p-2 bg-neutral">
      <div className="pl-2">
        <div className="flex flex-col">
          <Link
            href="/"
            className={`text-3xl ${greatVibes.className} md:text-5xl lg:text-5xl  text-white hover:text-orange-400 transition-colors`}
          >
            The Coding Vibes
          </Link>
          <Text className="text-slate-100"><span className="text-xs italic tracking-widest">with</span> Dipendra Bhandari</Text>
        </div>
      </div>
    </div>
  );
};

export default Header;
