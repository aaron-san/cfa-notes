import path from "path";
import { getSlugs, getCleanedSlug } from "@/app/lib/utils";
import Link from "next/link";
const blogDir = path.join(process.cwd(), "content", "cfa-level-2");

export default function BlogIndex() {
  const slugs = getSlugs(blogDir); // e.g. [{ slug: ["cfa-level-1", "equities-1"] }]

  return (
    <div className="p-6">
      <h1 className="mb-4 font-bold text-2xl">CFA Level 2 Notes</h1>
      <ul className="flex flex-wrap justify-start gap-2 list-none">
        {slugs.map(({ slug }) => {
          const href = `/blog/${slug.join("/")}`;
          return (
            <li key={href}>
              <Link
                href={href}
                className="bg-slate-200 px-4 py-2 rounded text-slate-800 hover:underline"
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
