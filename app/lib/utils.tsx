import fs from "fs";
import path from "path";

const blogDir = path.join(process.cwd(), "content");

export const getSlugs = (dir: string): { slug: string[] }[] => {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) return getSlugs(fullPath);

    if (entry.isFile() && entry.name.endsWith(".mdx")) {
      const relativePath = path.relative(blogDir, fullPath);
      const slug = relativePath.replace(/\.mdx$/, "").split(path.sep);
      return [{ slug }];
    }

    return [];
  });
};

export const getCleanedSlug = (slug: string[]) => {
  return (
    slug[1]
      // .replace(/-(\d+)$/, (_, num) => ` (Part ${num})`)
      .replace(/-1/, "")
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
      .replace("Gips", "GIPS")
  );
};
