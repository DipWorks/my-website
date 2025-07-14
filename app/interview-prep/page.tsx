import { Card } from "@radix-ui/themes";
import type { Metadata } from "next";
import { getMarkdownFiles, getPostInformation } from "../utils/file";
import { Post } from "../types";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Interview Preparation Guide",
};

export default async function InterviewPrep() {
  const baseDir = "interview-prep";
  const files = getMarkdownFiles(baseDir);

  const posts = files
    .map((file) => getPostInformation(file, baseDir))
    .filter((post): post is Post => post !== undefined);

  return (
    <Card className="mr-4 flex flex-col items-center text-center">
      <div>
        <p>
          <strong>Welcome to my Interview Preparation Guide</strong>
        </p>
        <p>
          Here, you will find everything that&apos;s needed to be ready for that
          next interview
          <strong> whenever that is scheduled !</strong>
        </p>
        <ul>
          {posts.filter(Boolean).map((post) => (
            <li key={post.title}>
              <Card>
                <strong>
                  <Link href={`/interview-prep/${post.slug}`}>
                    {post.title}
                  </Link>
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
