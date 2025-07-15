import type { Metadata } from "next";

import ErrorComponent from "@/components/ErrorComponent";
import { getFrontmatter } from "next-mdx-remote-client/utils";
import { Frontmatter } from "@/types";
import { getMarkdownFromSlug } from "@/utils/file";
import { components } from "@/mdxComponents";
import CustomRemoteMdx from "@/components/CustomRemoteMdx";

const baseDir = "interview-prep";

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const file = await getMarkdownFromSlug(params.slug, baseDir);

  if (!file) return {};

  const { frontmatter } = getFrontmatter<Frontmatter>(file.source);

  return {
    title: frontmatter.title ?? "Interview Preparation",
  };
}

export default async function Post(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const result = await getMarkdownFromSlug(params.slug, baseDir);

  if (!result) {
    return <ErrorComponent error="The source could not be found !" />;
  }

  const { source, format } = result;

  return (
    <CustomRemoteMdx source={source} format={format} components={components} />
  );
}
