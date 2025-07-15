import fs from "fs";
import { getFrontmatter } from "next-mdx-remote-client/utils";
import path from "path";
import { Frontmatter, Post } from "../types";
import { getMarkdownExtension } from ".";

export const RE = /\.mdx?$/; // regular expression that matches only .md or .mdx files

export const getMarkdownFiles = (baseDir: string): string[] => {
  return fs
    .readdirSync(path.join(process.cwd(), "data", baseDir))
    .filter((filePath: string) => RE.test(filePath));
};

export const getSource = async (
  filename: string,
  baseDir: string,
): Promise<string | undefined> => {
  const sourcePath = path.join(process.cwd(), "data", baseDir, filename);
  if (!fs.existsSync(sourcePath)) return;
  return await fs.promises.readFile(sourcePath, "utf8");
};

//get the source and format from a slug !
export const getMarkdownFromSlug = async (
  slug: string,
  baseDir: string,
): Promise<
  | {
      source: string;
      format: "md" | "mdx";
    }
  | undefined
> => {
  if (!/-mdx?$/.test(slug)) return;

  // replace the last dash with dot in the slug for filename
  const filename = slug.replace(/-(?=[^-]*$)/, ".") as
    | `${string}.md`
    | `${string}.mdx`;

  const fullPath = path.join(process.cwd(), "data", baseDir, filename);

  if (fs.existsSync(fullPath)) {
    const source = await getSource(filename, baseDir);

    if (!source) return;

    return {
      source,
      format: getMarkdownExtension(filename),
    };
  }
};

export const getSourceSync = (
  filename: string,
  baseDir: string,
): string | undefined => {
  const sourcePath = path.join(process.cwd(), "data", baseDir, filename);
  console.log(sourcePath);
  if (!fs.existsSync(sourcePath)) return;
  return fs.readFileSync(sourcePath, "utf8");
};

//get the frontmatter info and slug of a file
export const getPostInformation = (
  filename: string,
  baseDir: string,
): Post | undefined => {
  const source = getSourceSync(filename, baseDir);

  if (!source) return;

  const frontmatter = getFrontmatter<Frontmatter>(source).frontmatter;

  const post: Post = {
    ...frontmatter,
    // replace the last dot with dash in the filename for slug
    slug: filename.replace(/\.(?=[^.]*$)/, "-"),
  };

  return post;
};
