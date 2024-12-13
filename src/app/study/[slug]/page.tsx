import { compileMDX } from "next-mdx-remote/rsc";
import { promises as fs } from "fs";
import path from "path";
import rehypeHighlight from "rehype-highlight";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import remarkFrontMatter from "remark-frontmatter";

import Note from "../../components/Note";

interface Frontmatter {
  title: string;
}

export default async function StudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = await fs.readFile(
    path.join(process.cwd(), "src/app/cfa-level-1", `${slug}.mdx`),
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
    },
  });

  return (
    <div>
      <h1>{data.frontmatter.title}</h1>
      {data.content}
    </div>
  );
}
