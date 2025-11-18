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
    <article className="mx-auto px-2 sm:px-6 max-w-3xl dark:text-slate-100">
      <div className="mb-4 border-slate-100/20 border-b w-fit">
        <h1>{frontmatter.title ?? "Untitled"}</h1>
        <div className="flex gap-2 pb-3">
          {frontmatter.tags.map((tag: string) => (
            <div
              className="bg-slate-600 px-2 py-1 rounded-full text-slate-300 text-xs"
              key={tag}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
      {MDXContent}
      <div className="my-8"></div>
      <hr />
      <div className="flex justify-around items-center gap-4 my-4">
        {frontmatter.backUrl && (
          <Link
            href={`/${frontmatter.backUrl}`}
            className="bg-slate-300 hover:bg-slate-200 shadow py-1 pr-4 pl-6 rounded-r-md rounded-l-[20px] font-bold text-slate-800"
          >
            Back
          </Link>
        )}

        {frontmatter.nextUrl && (
          <Link
            href={`/${frontmatter.nextUrl}`}
            className="bg-slate-300 hover:bg-slate-200 shadow mt-4 py-1 pr-6 pl-4 rounded-r-[20px] rounded-l-md font-bold text-slate-800"
          >
            Next
          </Link>
        )}
      </div>
    </article>
  );
}
