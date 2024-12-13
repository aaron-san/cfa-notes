import React from "react";
import Link from "next/link";
import path from "path";
import { getCleanedSlug, getFilePaths } from "../utils/utils"; // Assuming this utility function is correctly implemented

const PostsHome = async () => {
  const cfaOneDir = path.join("src/app/content/cfa-level-1");

  // Get file paths for CFA Level 1
  const cfaOneSlugs = await getFilePaths(cfaOneDir);
  console.log("cfaOneSlugs: ", cfaOneSlugs);
  // Ensure cfaOneSlugs is an array before mapping over it
  if (!Array.isArray(cfaOneSlugs)) {
    return <div>Error: Unable to load slugs for CFA Level 1</div>;
  }

  return (
    <div className="">
      <div className="mb-2 text-xl text-slate-500">All Topics</div>
      <div className="p-4 shadow-md rounded my-2">
        <h2 className="mb-2">CFA Level 1</h2>
        <div className="flex gap-2 flex-wrap">
          {cfaOneSlugs.map((slug) => {
            // const { slug } = slugArr;

            // Use the last part of the slug array for the title (no need for split or toString)
            const title = slug.split("\\").slice(-2, -1).join();

            return (
              <button
                key={slug}
                className="border border-slate-400 rounded px-4 py-2"
              >
                <Link href={`/posts/cfa-level-1/${title}`}>
                  {getCleanedSlug(title)}
                </Link>
              </button>
            );
          })}
        </div>
      </div>

      {/* Uncomment and implement other sections if needed */}
      {/* <div className="p-4 shadow-md rounded my-2">
        <h2 className="mb-2">CFA Level 2</h2>
        <div className="flex gap-2 flex-wrap">
          {cfaTwoSlugs.map((slugArr) => {
            const { slug } = slugArr;
            const slugJoined = slug.join("/");
            const hasPart = slugJoined.match(/-[^2-9]{1}$/i);
            return (
              hasPart && (
                <button key={slugJoined} className="border border-slate-400 rounded px-4 py-2">
                  <Link href={"posts/cfa-level-2/" + slugJoined}>
                    {getCleanedSlug(slugJoined)}
                  </Link>
                </button>
              )
            );
          })}
        </div>
      </div> */}
    </div>
  );
};

export default PostsHome;
