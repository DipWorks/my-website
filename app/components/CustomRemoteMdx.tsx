import { getOptions } from "@/utils/mdx";
import { Card } from "@radix-ui/themes";
import { MDXComponents, MDXRemote } from "next-mdx-remote-client/rsc";
import React from "react";
import ErrorComponent from "./ErrorComponent";

type Props = {
  source: string;
  format: "md" | "mdx";
  components: MDXComponents;
};

const CustomRemoteMdx = ({ source, format, components }: Props) => {
  return (
    <Card className="mr-4 mb-4 flex flex-col items-center text-center">
      <MDXRemote
        source={source}
        options={getOptions(format, source)}
        components={components}
        onError={ErrorComponent}
      />
    </Card>
  );
};

export default CustomRemoteMdx;
