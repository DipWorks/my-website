import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote-client/rsc";

import ErrorComponent from "@/components/ErrorComponent";
import { getFrontmatter } from "next-mdx-remote-client/utils";
import { Frontmatter } from "@/types";
import { getOptions } from "@/utils/mdx";
import { getMarkdownFromSlug } from "@/utils/file";
import { components } from "@/mdxComponents";
import CustomRemoteMdx from "@/components/CustomRemoteMdx";

type Props = {
  params: { slug: string };
};

const baseDir = "blogs";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const file = await getMarkdownFromSlug(params.slug, baseDir);

  if (!file) return {};

  const { frontmatter } = getFrontmatter<Frontmatter>(file.source);

  return {
    title: frontmatter.title ?? "Blog Articles",
  };
}

export default async function Post({ params }: Props) {
  const result = await getMarkdownFromSlug(params.slug, baseDir);

  if (!result) {
    return <ErrorComponent error="The source could not be found !" />;
  }

  const { source, format } = result;

  return (
    <CustomRemoteMdx source={source} format={format} components={components} />
  );
}
