import { Card } from "@radix-ui/themes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ipikuka Articles",
};

export default async function Articles() {

  const article = (f: string) => f.includes("article");

  return (
    <Card className="mr-4 flex flex-col items-center text-center">
        <div>
      <p>
        <strong>Welcome to my Interview Preparation Guide</strong>
      </p>
      <p>
        Here, you will find everything that's needed to be ready for that next interview
        <strong> whenever that is scheduled !</strong>
      </p>
    </div>
    </Card>
  );
}
