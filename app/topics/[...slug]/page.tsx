import path from "path";
import { getSlugs, getCleanedSlug, getTopicDirs } from "@/app/lib/utils";
import Link from "next/link";

const contentDir = path.join(process.cwd(), "content");
// const pageSlugs = getSlugs(contentDir); // Fetch all slugs

const topicPaths = getTopicDirs(contentDir);
// Static params for dynamic routes
export async function generateStaticParams() {
  return topicPaths;
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string[] }; // Destructure slug from params
}) {
  const { slug } = params;
  // Fetch all slugs for filtering (optional)
  let slugs = getSlugs(contentDir);
  slugs = slugs.filter(({ slug: s }) => s.includes(slug[0]));

  return (
    <div className="p-6">
      <Link
        href="/"
        className="flex gap-1 dark:hover:text-slate-300 dark:text-slate-400"
      >
        <div className="text-xl">⇽</div>
        <div className="py-[5px] text-sm">Topics</div>
      </Link>
      <h1 className="mb-4 font-bold text-2xl">
        {slug
          .join(" / ")
          .replace("cfa", "CFA")
          .replace("caia", "CAIA")
          .replace("-", " ")
          .replace("-", " ")
          .replace("level", "Level")}
      </h1>
      <div className="flex flex-wrap justify-start gap-2 ml-4">
        {slugs.map(({ slug }) => {
          const href = `/blog/${slug.join("/")}`;
          return (
            slug[slug.length - 1].slice(-2) === "-1" && (
              <Link
                key={href}
                href={href}
                className="hover:bg-slate-100 dark:bg-gray-700 dark:hover:bg-slate-600 px-4 py-2 border border-slate-500 rounded dark:text-slate-100"
              >
                {getCleanedSlug(slug)}
              </Link>
            )
          );
        })}
      </div>
    </div>
  );
}
