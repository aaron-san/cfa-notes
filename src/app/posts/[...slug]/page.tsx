import Link from "next/link";
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
        ? fs.readdirSync(path.join(contentDirectory, entry.name))
        : entry.name
    )
    .filter((file) => file.endsWith(".mdx"));

  return files.map((file) => {
    const relativePath = file.replace(/\.mdx$/, "");
    const slug = relativePath.split("/");
    return { slug }; // Ensure slug is an array
  });
}

type tParams = Promise<{ slug: string[] }>;

export default async function Post({ params }: { params: tParams }) {
  const { slug } = await params;

  if (!slug) {
    throw new Error("Slug is missing.");
  }

  const slugPath = slug.join("/"); // Convert array back to a path

  const filePath = path.join(contentDirectory, `${slugPath}.mdx`);

  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`);
  }

  const fileContents = fs.readFileSync(filePath, "utf8");

  // Parse the frontmatter (metadata) and content
  const { data: metadata, content } = matter(fileContents);
  const { title, backUrl, nextUrl } = metadata;

  // Serialize MDX content
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeHighlight, rehypeKatex],
      remarkPlugins: [remarkMath],
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
        <div className="absolute left-[62px] -top-1 w-[34px] h-[42px] bg-slate-100 z-30 "></div>
        <div className="absolute left-[65px] -top-1 w-[40px] h-[42px] rounded-r-[29px] bg-slate-100  z-20 border-2 border-slate-500"></div>
        <div className="absolute left-[82px] px-4 py-1 border-2 border-slate-500 rounded-r-[30px]   bg-cyan-200 text-slate-600 z-10 pl-10">
          {title}
        </div>
      </div>

      <h1 className="mt-12">{title}</h1>
      {/* Pass the serialized MDX to the client component */}
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
}
