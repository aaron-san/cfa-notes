import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { mdxComponents } from "../../../mdx-components";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import matter from "gray-matter";
import Link from "next/link";

const blogDir = path.join(process.cwd(), "content");

export async function generateStaticParams() {
  const walk = (dir: string): { slug: string[] }[] => {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    return entries.flatMap((entry) => {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) return walk(fullPath);

      if (entry.isFile() && entry.name.endsWith(".mdx")) {
        const relativePath = path.relative(blogDir, fullPath);
        const slug = relativePath.replace(/\.mdx$/, "").split(path.sep);
        return [{ slug }];
      }

      return [];
    });
  };

  return walk(blogDir);
}

export default async function BlogPost({
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
    <article className="prose max-w-3xl mx-auto px-6 pt-20">
      <h1>{frontmatter.title ?? "Untitled"}</h1>
      {MDXContent}
      <hr />
      <div className="flex justify-between items-center mt-4">
        {frontmatter.backUrl && (
          <Link
            href={`/${frontmatter.backUrl}`}
            className="text-blue-500 hover:underline"
          >
            Back
          </Link>
        )}

        {frontmatter.nextUrl && (
          <Link
            href={`/${frontmatter.nextUrl}`}
            className="text-blue-500 hover:underline"
          >
            Next
          </Link>
        )}
      </div>
    </article>
  );
}
