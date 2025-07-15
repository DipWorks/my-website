import type { Metadata } from "next";

import ErrorComponent from "@/components/ErrorComponent";
import { getFrontmatter } from "next-mdx-remote-client/utils";
import { Frontmatter } from "@/types";
import { getMarkdownFromSlug } from "@/utils/file";
import { components } from "@/mdxComponents";
import CustomRemoteMdx from "@/components/CustomRemoteMdx";
import { getSlug } from "@/utils";

type Props = {
  params: { slug: string };
};

const baseDir = "interview-prep";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = await getSlug(params);
  const file = await getMarkdownFromSlug(slug, baseDir);

  if (!file) return {};

  const { frontmatter } = getFrontmatter<Frontmatter>(file.source);

  return {
    title: frontmatter.title ?? "Interview Preparation",
  };
}

export default async function Post({ params }: Props) {
  const slug = await getSlug(params);
  const result = await getMarkdownFromSlug(slug, baseDir);

  if (!result) {
    return <ErrorComponent error="The source could not be found !" />;
  }

  const { source, format } = result;

  return (
    <CustomRemoteMdx source={source} format={format} components={components} />
  );
}
