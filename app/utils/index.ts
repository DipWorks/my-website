export function toTitleCase(str: string | undefined) {
  if (!str) return;

  return str.replace(/\b\w+('\w{1})?/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
  });
}

export function getMarkdownExtension(
  fileName: `${string}.md` | `${string}.mdx`,
): "md" | "mdx" {
  const match = fileName.match(/\.mdx?$/);

  return match![0].substring(1) as "md" | "mdx";
}

export function getFormattedDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
