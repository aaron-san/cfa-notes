import { promises as fs } from "fs";
import path from "path";

const TITLELENGTH = 25;
export const getSubstring = (title: string) => {
  return title.length <= 10 ? title : title.substring(0, TITLELENGTH) + "...";
};

export const getCleanedSlug = (slug: string) => {
  return slug
    .split("-")
    .map((x) => (x ? `${x[0].toUpperCase()}${x.slice(1)}` : "Default title"))
    .join(" ")
    .replace(/ 1$/, "")
    .replace(/^[0-9]{1,3} /, "");
};

// const contentDirectory = path.join(process.cwd(), "src/app/content");

// type Slug = {
//   slug: string[];
// };

export const getFilePaths = async (dir: string): Promise<string[]> => {
  // const filePath = path.join(process.cwd(), dir);
  // const files = await fs.readdir(filePath);
  const files = await fs.readdir(dir);
  let filePaths: string[] = [];

  console.log("Files: ", files);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = await fs.stat(filePath);

    if (stat.isDirectory()) {
      // Recurse into directories
      filePaths = [...filePaths, ...(await getFilePaths(filePath))];
    } else if (filePath.endsWith("page.mdx")) {
      // Only include files that are markdown pages
      filePaths.push(filePath);
    }
  }
  console.log("File paths: ", filePaths);
  return filePaths;
};
