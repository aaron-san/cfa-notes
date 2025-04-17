import fs from "fs";
import path from "path";

export function getPost(slug: string) {
  const filePath = path.join(process.cwd(), "app", "markdown", `${slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf-8");
  return source;
}
