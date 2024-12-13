// import fs from "fs";
// import path from "path";
// import matter from "gray-matter";

// const contentDirectory = path.join(process.cwd(), "src/app/content");

// function getAllFiles(directory: string): string[] {
//   const entries = fs.readdirSync(directory, { withFileTypes: true });

//   return entries
//     .flatMap((entry) => {
//       const fullPath = path.join(directory, entry.name);
//       return entry.isDirectory() ? getAllFiles(fullPath) : fullPath;
//     })
//     .filter((file) => file.endsWith(".mdx"));
// }

// export function getAllPosts() {
//   const files = getAllFiles(contentDirectory);

//   return files.map((file) => {
//     const slug = path.relative(contentDirectory, file).replace(/\.mdx$/, "");
//     const fileContents = fs.readFileSync(file, "utf8");
//     const { data, content } = matter(fileContents);

//     return {
//       slug, // Nested path without file extension (e.g., 'category1/post1')
//       metadata: data,
//       content,
//     };
//   });
// }
