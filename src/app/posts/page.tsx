import React from "react";
import Link from "next/link";
import fs from "fs";
import path from "path";

const getSlugs = (contentDirectory: string) => {
  const files = fs
    .readdirSync(contentDirectory, { withFileTypes: true })
    .flatMap((entry) =>
      entry.isDirectory()
        ? fs.readdirSync(path.join(contentDirectory, entry.name))
        : entry.name
    )
    .filter((file) => file.endsWith(".mdx"));

  const slugs = files.map((file) => {
    const relativePath = file.replace(/\.mdx$/, "");
    const slug = relativePath.split("/");
    return { slug }; // Ensure slug is an array
  });

  return slugs;
};

const PostsHome = () => {
  const cfaOneDir = path.join(process.cwd(), "src/app/content/cfa-level-1");
  const cfaTwoDir = path.join(process.cwd(), "src/app/content/cfa-level-2");
  const cfaThreeDir = path.join(process.cwd(), "src/app/content/cfa-level-3");

  const cfaOneSlugs = getSlugs(cfaOneDir);
  const cfaTwoSlugs = getSlugs(cfaTwoDir);
  const cfaThreeSlugs = getSlugs(cfaThreeDir);

  return (
    <div className="">
      <h1>All Topics</h1>
      <h2>CFA Level 1</h2>
      <div className="flex gap-4">
        {cfaOneSlugs.map((slugArr) => {
          const { slug } = slugArr;
          return (
            <button
              key={slug.join("/")}
              className="border border-slate-400 rounded px-4 py-2"
            >
              <Link href={"posts/cfa-level-1/" + slug.join("/")}>
                {slug.join("/")}
              </Link>
            </button>
          );
        })}
      </div>
      <h2>CFA Level 2</h2>
      <div>
        {cfaTwoSlugs.map((slugArr) => {
          const { slug } = slugArr;
          return (
            <button
              key={slug.join("/")}
              className="border border-slate-400 rounded px-4 py-2"
            >
              <Link href={"posts/cfa-level-2/" + slug.join("/")}>
                {slug.join("/")}
              </Link>
            </button>
          );
        })}
      </div>
      <h2>CFA Level 3</h2>
      <ul>
        {cfaThreeSlugs.map((slugArr) => {
          const { slug } = slugArr;
          return (
            <button
              key={slug.join("/")}
              className="border border-slate-400 rounded px-4 py-2"
            >
              <Link href={"posts/cfa-level-3/" + slug.join("/")}>
                {slug.join("/")}
              </Link>
            </button>
          );
        })}
      </ul>
    </div>
  );
};

export default PostsHome;
