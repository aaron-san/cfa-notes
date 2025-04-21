import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { mdxComponents } from "../../../mdx-components";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import matter from "gray-matter";
import Link from "next/link";
import { getSlugs } from "@/app/lib/utils";

const blogDir = path.join(process.cwd(), "content");

export async function generateStaticParams() {
  return getSlugs(blogDir);
}

export default async function BogPost({
  params,
}: {
  params: { slug: string[] };
}) {
  const slugPath = params.slug.join("/"); // e.g. "cfa-level-1/simple"
  const filePath = path.join(blogDir, `${slugPath}.mdx`);

  if (!fs.existsSync(filePath)) return notFound();

  const source = fs.readFileSync(filePath, "utf8");
  const { content, data: frontmatter } = matter(source);

  const { content: MDXContent } = await compileMDX({
    source: content,
    components: mdxComponents,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    },
  });

  return (
    <article className="dark:text-slate-100 max-w-3xl mx-auto px-6">
      <h1>{frontmatter.title ?? "Untitled"}</h1>
      {MDXContent}
      <hr />
      <div className="flex justify-around gap-4 items-center my-4">
        {frontmatter.backUrl && (
          <Link
            href={`/${frontmatter.backUrl}`}
            className="text-slate-800 hover:bg-slate-200 shadow rounded-r-md rounded-l-[20px] py-1 pl-6 pr-4 bg-slate-300 font-bold"
          >
            Back
          </Link>
        )}

        {frontmatter.nextUrl && (
          <Link
            href={`/${frontmatter.nextUrl}`}
            className="text-slate-800 hover:bg-slate-200 shadow rounded-l-md rounded-r-[20px] py-1 pr-6 pl-4 bg-slate-300 font-bold"
          >
            Next
          </Link>
        )}
      </div>
    </article>
  );
}
