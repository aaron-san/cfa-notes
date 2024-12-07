// import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import ClientMDXRenderer from "../../components/ClientMDXRenderer";
import rehypeHighlight from "rehype-highlight";

const contentDirectory = path.join(process.cwd(), "src/app/content");

export async function generateStaticParams() {
  const files = fs
    .readdirSync(contentDirectory, { withFileTypes: true })
    .flatMap((entry) =>
      entry.isDirectory()
        ? fs
            .readdirSync(path.join(contentDirectory, entry.name))
            .map((file) => ({
              slug: [entry.name, file.replace(/\.mdx$/, "")], // Include directory in slug
            }))
        : {
            slug: [entry.name.replace(/\.mdx$/, "")], // For files in the root directory
          }
    )
    .filter(({ slug }) => slug[slug.length - 1].endsWith(".mdx")); // Check file extension

  return files;
}

type tParams = Promise<{ slug: string[] }>;

// export default async function Post({ params }: { params: { slug: string[] } }) {
export default async function Post({ params }: { params: tParams }) {
  const { slug } = await params;
  const slugPath = slug.join("/"); // Combine the slug array into a path
  // const slugPath = await params.slug.join("/"); // Combine the slug array into a path
  // console.log(await params);

  const filePath = path.join(contentDirectory, `${slugPath}.mdx`);

  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`);
  }

  const fileContents = fs.readFileSync(filePath, "utf8");

  const { data: metadata, content } = matter(fileContents);
  const { title } = metadata;
  // const { title, backUrl, nextUrl } = metadata;

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeHighlight, rehypeKatex],
      remarkPlugins: [remarkMath],
    },
  });

  return (
    <>
      <h1>{title}</h1>
      <ClientMDXRenderer compiledSource={mdxSource} />
    </>
  );
}
