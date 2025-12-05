import fs from "fs";
import path from "path";


const contentDir = path.join(process.cwd(), "content");

// Recursive function to get all slugs
export function getSlugs(dir: string): { slug: string[] }[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      // Recurse into subdirectories
      return getSlugs(fullPath);
    }

    if (entry.isFile() && entry.name.endsWith(".mdx")) {
      // For .mdx files, generate the slug path (relative to `content` folder)
      const relativePath = path.relative("content", fullPath);
      const slug = relativePath.replace(/\.mdx$/, "").split(path.sep);
      return [{ slug }];
    }

    return [];
  });
}

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

// Recursive function to get all slugs
export function getTopicDirs(dir: string): { slug: string[] }[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const topicPaths: { slug: string[] }[] = [];

  entries.forEach((entry) => {
    // const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      // && entry.name.includes("-topics")) {
      // Recurse into subdirectories
      topicPaths.push({ slug: [entry.name] });
    }
  });
  return topicPaths;
}



// export async function wrapTables(html: string) {
//   const { load } = await import("cheerio"); // safe for Next.js
//   const $ = load(html);

//   $("table").each(function () {
//     $(this).wrap('<div class="table-container"></div>');
//   });

//   return $.html();
// }

