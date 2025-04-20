import path from "path";
import { getSlugs } from "@/app/lib/utils";
import Link from "next/link";

const blogDir = path.join(process.cwd(), "content", "cfa-level-1");

export default function BlogIndex() {
  const slugs = getSlugs(blogDir); // e.g. [{ slug: ["cfa-level-1", "equities-1"] }]

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">CFA Level 1 Notes</h1>
      <ul className="space-y-2 list-disc list-inside">
        {slugs.map(({ slug }) => {
          const href = `/blog/${slug.join("/")}`;
          return (
            <li key={href}>
              <Link href={href} className="text-blue-600 hover:underline">
                {slug[1]}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
