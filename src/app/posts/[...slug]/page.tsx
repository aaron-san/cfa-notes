import React from "react";
import Link from "next/link";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { getFilePaths } from "../../utils/utils";
import dynamic from "next/dynamic";
const ClientMDXRenderer = dynamic(
  () => import("../../components/ClientMDXRenderer")
);
import rehypeHighlight from "rehype-highlight";
import { getSubstring } from "../../utils/utils";
import { promises as fs } from "fs";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { notFound } from "next/navigation";

const contentDirectory = path.join(process.cwd(), "src/app/content");

// type Slug = {
//   slug: string[];
// };

// Read content directory and return an array of file paths
export async function generateStaticParams() {
  const filePaths = await getFilePaths(contentDirectory);

  return filePaths.map((filePath) => {
    // Convert file paths to slugs for dynamic routes
    const relativePath = path.relative(contentDirectory, filePath);
    const slug = relativePath
      .replace(/\\/g, "/")
      .replace("page.mdx", "")
      .split("/")
      .filter(Boolean);
    return { slug };
  });
}

type Params = {
  slug: string[];
};

// The `Post` component expects `params` to be a Promise which resolves to `{ slug: string[] }`
export default async function Post({ params }: { params: Promise<Params> }) {
  try {
    // Await the params because in Next.js 15 params is a Promise
    const { slug } = await params;

    // Debugging the slug value
    console.log("Slug:", slug);

    if (!slug || slug.length === 0) {
      return notFound();
    }

    // Ensure slug is a valid array and not an object
    const slugPath = Array.isArray(slug) ? slug.join("/") : "";
    if (!slugPath) {
      return notFound();
    }

    // const ext = slugPath.length > 1 ? "page.mdx" : "";
    const filePath = path.join(contentDirectory, slugPath, "page.mdx");

    // Debugging the file path
    console.log("File Path:", filePath);

    // Normalize the file path to make it consistent
    const normalizedFilePath = path.normalize(filePath);

    // Debugging the normalized path
    console.log("Normalized File Path:", normalizedFilePath);

    // Read the file content
    const fileContents = await fs.readFile(normalizedFilePath, "utf8");

    // Process the file content
    const { data: metadata } = matter(fileContents);
    const { title = "Default Title", backUrl, nextUrl } = metadata;

    const mdxSource: MDXRemoteSerializeResult = await serialize(fileContents, {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [rehypeHighlight, rehypeKatex],
        remarkPlugins: [
          remarkMath,
          remarkFrontmatter,
          [remarkMdxFrontmatter, { name: "frontmatter" }],
        ],
      },
    });

    return (
      <>
        <div className="relative">
          <div className="absolute top-0 left-0 z-40">
            <button className="px-4 py-1 border-2 border-slate-500 rounded-r-[30px] hover:bg-slate-200 active:scale-[98%] text-slate-600 bg-slate-100">
              <Link href="/posts">All Posts</Link>
            </button>
          </div>
          <div className="absolute left-[62px] -top-2 w-[34px] h-[48px] bg-slate-100 z-30"></div>
          <div className="absolute left-[65px] -top-1 w-[40px] h-[42px] rounded-r-[29px] bg-slate-100 z-20 border-2 border-slate-500"></div>
          <div className="absolute left-[82px] pr-2 py-1 border-2 border-slate-500 rounded-r-[30px] bg-cyan-200 text-slate-600 z-10 pl-8 text-nowrap max-w-[240px] md:max-w-[600px] lg:max-w-none">
            {getSubstring(title)}
          </div>
        </div>
        <p className="mt-[70px] mb-4 text-slate-500 border border-slate-500 rounded px-2 py-1 text-sm md:w-fit">
          {title}
        </p>
        <ClientMDXRenderer compiledSource={mdxSource} />
        <div className="flex justify-center gap-4 max-w-4xl mt-8 mb-12 container mx-auto">
          {backUrl && (
            <button className="pl-8 pr-6 py-2 border border-slate-500 rounded-l-full hover:bg-slate-200 active:scale-[98%]">
              <Link href={backUrl}>Back</Link>
            </button>
          )}
          <button className="px-6 py-2 border border-slate-500 hover:bg-slate-200 active:scale-[98%]">
            <Link href="/posts">All Topics</Link>
          </button>
          {nextUrl && (
            <button className="pl-6 pr-8 py-2 border border-slate-500 rounded-r-full hover:bg-slate-200 active:scale-[98%]">
              <Link href={nextUrl}>Next</Link>
            </button>
          )}
        </div>
      </>
    );
  } catch (error) {
    console.error("Error reading file:", error);
    return notFound();
  }
}
