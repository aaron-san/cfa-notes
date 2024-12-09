import React from "react";
import Link from "next/link";
import fs from "fs";
import path from "path";
import { getCleanedSlug } from "../utils/utils";

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
      <div className="mb-2 text-xl text-slate-500">All Topics</div>
      <div className="p-4 shadow-md rounded my-2">
        <h2 className="mb-2">CFA Level 1</h2>
        <div className="flex gap-2 flex-wrap">
          {cfaOneSlugs.map((slugArr) => {
            const { slug } = slugArr;
            const slugJoined = slug.join("/");
            const hasPart = slugJoined.match(/-[^2-9]{1}$/i);
            return (
              hasPart && (
                <button
                  key={slugJoined}
                  className="border border-slate-400 rounded px-4 py-2"
                >
                  <Link href={"posts/cfa-level-1/" + slugJoined}>
                    {getCleanedSlug(slugJoined)}
                  </Link>
                </button>
              )
            );
          })}
        </div>
      </div>
      <div className="p-4 shadow-md rounded my-2">
        <h2 className="mb-2">CFA Level 2</h2>
        <div className="flex gap-2 flex-wrap">
          {cfaTwoSlugs.map((slugArr) => {
            const { slug } = slugArr;
            const slugJoined = slug.join("/");
            const hasPart = slugJoined.match(/-[^2-9]{1}$/i);
            return (
              hasPart && (
                <button
                  key={slug.join("/")}
                  className="border border-slate-400 rounded px-4 py-2"
                >
                  <Link href={"posts/cfa-level-2/" + slugJoined}>
                    {getCleanedSlug(slugJoined)}
                  </Link>
                </button>
              )
            );
          })}
        </div>
      </div>

      <div className="p-4 shadow-md rounded my-2">
        <h2 className="mb-2">CFA Level 3</h2>
        <div className="flex gap-2 flex-wrap">
          {cfaThreeSlugs.map((slugArr) => {
            const { slug } = slugArr;
            const slugJoined = slug.join("/");
            const hasPart = slugJoined.match(/-[^2-9]{1}$/i);
            return (
              hasPart && (
                <button
                  key={slug.join("/")}
                  className="border border-slate-400 rounded px-4 py-2"
                >
                  <Link href={"posts/cfa-level-3/" + slugJoined}>
                    {getCleanedSlug(slugJoined)}
                  </Link>
                </button>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PostsHome;
