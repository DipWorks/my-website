import { Blockquote, Card, Heading, Text } from "@radix-ui/themes";
import type { Metadata } from "next";
import { getMarkdownFiles, getPostInformation } from "../utils/file";
import { Post } from "../types";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog Articles",
};

export default async function InterviewPrep() {
  const baseDir = "blogs";
  const files = getMarkdownFiles(baseDir);

  const posts = files
    .map((file) => getPostInformation(file, baseDir))
    .filter((post): post is Post => post !== undefined);

  return (
    <Card className="mr-4 flex flex-col items-center text-center">
      <div className="p-2">
        <Heading color="amber">Welcome to my Blogs !</Heading>
        <div className="mt-3 mb-3">
          <Text color="amber" highContrast>
            Are you struggling with something software related? <Blockquote color="blue">You are in the
            right spot.</Blockquote>
            <br />
            Find what you are looking for from the list below.
          </Text>
        </div>

        <ul>
          {posts.filter(Boolean).map((post) => (
            <li key={post.title}>
              <Card>
                <strong>
                  <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                </strong>
                <p>
                  <span>{String(post.date)}, </span>
                  <span>
                    written by <strong>{post.author}</strong>
                  </span>
                </p>
                <p>{post.summary}</p>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
