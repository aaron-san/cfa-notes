import React from "react";
import Link from "next/link";
import path from "path";
import matter from "gray-matter";
// import { serialize } from "next-mdx-remote/serialize";
// import remarkMath from "remark-math";
// import rehypeKatex from "rehype-katex";
// import ClientMDXRenderer from "../../components/ClientMDXRenderer";
// import rehypeHighlight from "rehype-highlight";
import { getSubstring } from "../../utils/utils";
// import { write as vWrite } from "to-vfile";
// import {read as vRead, write as vWrite} from "to-vfile"
// import { MDXRemote } from "next-mdx-remote/rsc";
import { compileMDX } from "next-mdx-remote/rsc";
// // new
import { readFile, readdir, lstat } from "node:fs/promises";
import Note from "../../components/Note";
// import remarkFrontmatter from "remark-frontmatter";
// import remarkMdxFrontmatter from "remark-mdx-frontmatter";
// import { compile } from "@mdx-js/mdx";
// import { write } from "fs";
// import { compile, run } from "@mdx-js/mdx";
// import * as runtime from "react/jsx-runtime";

// const runtime = {
//   Fragment: React.Fragment,
//   jsx: React.createElement,
//   jsxs: React.createElement,
// };

const contentDirectory = path.join(process.cwd(), "src/app/content");

// // type FileEntry = {
// //   name: string;
// //   isDirectory: () => boolean;
// // };

type Slug = {
  slug: string[];
};

// Read content directory and return an array of file names
export async function generateStaticParams() {
  const files = await readdir(contentDirectory, { withFileTypes: true });
  const processedFiles: Slug[] = [];
  // const getSlugs = async (files: FileEntry[]): Promise<Slug> => {
  for (const entry of files) {
    const stats = await lstat(path.join(entry.parentPath, entry.name));
    // if directory
    if (stats.isDirectory()) {
      const dirFiles = await readdir(path.join(contentDirectory, entry.name), {
        withFileTypes: true,
      });
      for (const file of dirFiles) {
        processedFiles.push({
          slug: [entry.name, file.name.replace(/\.mdx$/, "")], // Include directory in slug
        });
      }
    } else {
      // if file
      processedFiles.push({
        slug: [entry.name.replace(/\.mdx$/, "")], // For files in the root directory
      });
    }
  }
  return processedFiles;
}

type tParams = Promise<{ slug: string[] }>;

// export default async function Post({ params }: { params: { slug: string[] } }) {
export default async function Post({ params }: { params: tParams }) {
  const { slug } = await params;
  const slugPath = slug.join("/"); // Combine the slug array into a path
  // const slugPath = await params.slug.join("/"); // Combine the slug array into a path
  // console.log(await params);
  const filePath = path.join(contentDirectory, `${slugPath}.mdx`);
  const stats = await lstat(filePath);
  if (!stats.isFile()) {
    throw new Error(`File not found: ${filePath}`);
  }

  const fileContents = await readFile(filePath, "utf8");
  const { data: metadata } = matter(fileContents);
  // const { data: metadata, content } = matter(fileContents);
  const { title, backUrl, nextUrl } = metadata;
  // const title = "Good title";
  // const backUrl = "backUrl";
  // const nextUrl = "nextUrl";

  // const compiled = await compile(fileContents, {
  //   jsx: true,
  //   rehypePlugins: [rehypeHighlight, rehypeKatex],
  //   remarkPlugins: [
  //     remarkMath,
  //     remarkFrontmatter,
  //     [remarkMdxFrontmatter, { name: "frontmatter" }],
  //   ],
  // });

  const { content, frontmatter } = await compileMDX({
    source: fileContents,
    options: { parseFrontmatter: true },
    components: { Note },
  });
  console.log(frontmatter);

  return (
    <>
      <div className="relative">
        <div className="absolute top-0 left-0 z-40">
          <button className="px-4 py-1 border-2 border-slate-500 rounded-r-[30px] hover:bg-slate-200 active:scale-[98%] text-slate-600 bg-slate-100">
            <Link href="/posts">All Posts</Link>
          </button>
        </div>
        <div className="absolute left-[62px] -top-2 w-[34px] h-[48px] bg-slate-100 z-30"></div>
        <div className="absolute left-[65px] -top-1 w-[40px] h-[42px] rounded-r-[29px] bg-slate-100  z-20 border-2 border-slate-500"></div>
        <div className="absolute left-[82px] pr-2 py-1 border-2 border-slate-500 rounded-r-[30px]   bg-cyan-200 text-slate-600 z-10 pl-8 text-nowrap max-w-[240px] md:max-w-[600px] lg:max-w-none">
          {getSubstring(title)}
        </div>
      </div>
      <p className="mt-[70px] mb-4 text-slate-500 border border-slate-500 rounded px-2 py-1 text-sm md:w-fit">
        {title}
      </p>
      {/* Pass the serialized MDX to the client component */}
      {/* <ClientMDXRenderer compiledSource={mdxSource} /> */}
      {/* <MDXRemote source={fileContents} /> */}
      {content}
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
            {nextUrl && <Link href={nextUrl}>Next</Link>}
          </button>
        )}
      </div>
    </>
  );
}
