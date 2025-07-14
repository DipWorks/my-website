import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/portfolio`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blogs`,
    },
  ];
}
