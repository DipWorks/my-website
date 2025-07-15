import { Blockquote, Card, Heading, Link, Text } from "@radix-ui/themes";
import type { Metadata } from "next";
import { getMarkdownFiles, getPostInformation } from "../utils/file";
import { Post } from "../types";
import { getFormattedDate } from "@/utils";

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
            Are you struggling with something software related?{" "}
            <Blockquote color="blue">You are in the right spot.</Blockquote>
            <br />
            Find what you are looking for from the list below.
          </Text>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.filter(Boolean).map((post) => (
            <li key={post.title}>
              <Card>
                <strong>
                  <Link color="brown" href={`/blogs/${post.slug}`}>
                    {post.title}
                  </Link>
                </strong>
                <Text as="p">
                  <span>
                    <strong>::</strong> written by{" "}
                    <strong>{post.author}</strong> on{" "}
                    {getFormattedDate(String(post.date))}
                  </span>
                </Text>
                <p>{post.summary}</p>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
