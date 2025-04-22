import path from "path";
import { getSlugs, getCleanedSlug } from "@/app/lib/utils";
import Link from "next/link";
const blogDir = path.join(process.cwd(), "content", "cfa-level-1");

export default function BlogIndex() {
  const slugs = getSlugs(blogDir); // e.g. [{ slug: ["cfa-level-1", "equities-1"] }]

  return (
    <div className="p-6">
      <h1 className="mb-4 font-bold text-2xl">CFA Level 1 Notes</h1>
      <ul className="flex flex-wrap justify-start gap-2 list-none">
        {slugs
          .filter((slug) => !slug.slug[1].match(/-[2-9][0-9]?$/))
          .map(({ slug }) => {
            const href = `/blog/${slug.join("/")}`;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className="dark:bg-slate-600 dark:hover:bg-slate-500 px-4 py-2 rounded dark:text-slate-100 list-none"
                >
                  {getCleanedSlug(slug)}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
