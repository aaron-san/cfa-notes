import { compileMDX } from "next-mdx-remote/rsc";
import { promises as fs } from "fs";
import path from "path";
import rehypeHighlight from "rehype-highlight";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import remarkFrontMatter from "remark-frontmatter";
import Link from "next/link";

import Note from "../../components/Note";
import Caution from "../../components/Caution";

interface Frontmatter {
  title: string;
  nextUrl?: string;
  backUrl?: string;
  tags?: string[];
}

export default async function StudyPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const slugJoined = slug.join(path.sep);
  const content = await fs.readFile(
    path.join(process.cwd(), "src/app/notes", `${slugJoined}.mdx`),
    "utf-8"
  );

  const data = await compileMDX<Frontmatter>({
    source: content,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [rehypeHighlight, rehypeKatex],
        remarkPlugins: [remarkMath, remarkFrontMatter],
      },
    },
    components: {
      Note,
      Caution,
    },
  });

  const { title, nextUrl, backUrl, tags } = data.frontmatter;

  const getTitleParts = (title: string) => {
    const groupPart = title.substring(0, title.indexOf(":") + 1);
    const titlePart = title.substring(
      title.indexOf(":") + 1,
      title.indexOf("(")
    );
    const partPart = title.substring(title.indexOf("("), title.length + 1);

    return { groupPart, titlePart, partPart };
  };

  const titleParts = getTitleParts(title);
  const { groupPart, titlePart, partPart } = titleParts;

  return (
    <article className="mt-20">
      <div className="mb-2">
        <div className="text-blue-600">{groupPart}</div>
        <div className="text-5xl">{titlePart}</div>
        <div className="text-lg text-slate-700 pb-[10px]">{partPart}</div>
      </div>
      <hr />
      {tags && (
        <div className="mb-8 flex gap-1">
          {tags.map((tag) => {
            return (
              <div
                key={tag}
                className="bg-sky-700 border-2 border-sky-200 text-sky-200 px-3 py-1 rounded-2xl text-sm"
              >
                {tag}
              </div>
            );
          })}
        </div>
      )}
      <div className="my-4"></div>
      {data.content}
      <div className="mx-auto flex gap-1 justify-center">
        {backUrl && (
          <button className="px-4 py-2 text-lg border border-slate-500 hover:bg-slate-200 rounded-l-xl">
            <Link href={backUrl}>Back</Link>
          </button>
        )}

        <button className="px-4 py-2 text-lg border border-slate-500 hover:bg-slate-200">
          <Link href={"/study"}>All Topics</Link>
        </button>

        {nextUrl && (
          <button className="px-4 py-2 text-lg border border-slate-500 rounded-r-xl hover:bg-slate-200">
            <Link href={nextUrl}>Next</Link>
          </button>
        )}
      </div>
      <h2>Categories</h2>
    </article>
  );
}
