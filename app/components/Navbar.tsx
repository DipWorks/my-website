"use client";
import { TabNav } from "@radix-ui/themes";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="h-[4vh] mb-3 lg:mb-5 bg-stone-100">
      <TabNav.Root>
        <TabNav.Link href="/blogs" active={pathname == "/blogs"}>
          Blogs
        </TabNav.Link>
        <TabNav.Link
          href="/interview-prep"
          active={pathname == "/interview-prep"}
        >
          Interview Preparation
        </TabNav.Link>
        <TabNav.Link href="/about" active={pathname == "/about"}>
          About Me
        </TabNav.Link>
      </TabNav.Root>
    </div>
  );
};

export default Navbar;
