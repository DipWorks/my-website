import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import type { MDXComponents } from "next-mdx-remote-client/rsc";

import Button from "./Button";
import Hello from "./Hello";
import Toc from "./Toc";
import { default as pre } from "./Pre";
import BlockQuote, { default as blockquote } from "./BlockQuote";

export const components: MDXComponents = {
  Toc,
  Button,
  Hello,
  Dynamic: dynamic(() => import("./dynamic")),
  strong: (props: React.ComponentPropsWithoutRef<"strong">) => (
    <strong className="custom-strong" {...props} />
  ),
  wrapper: (props: React.ComponentPropsWithoutRef<"div">) => {
    return <div id="mdx-layout">{props.children}</div>;
  },
  Image,
  Link,
  pre,
  blockquote,
  BlockQuote,
};
