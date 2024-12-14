// import { compileMDX } from "next-mdx-remote/rsc";
// import { promises as fs } from "fs";
// import path from "path";
// import remarkFrontMatter from "remark-frontmatter";
import type { Metadata } from "next";
// import Link from "next/link";

export const metadata: Metadata = {
  title: "CFA Notes",
};

// import Image from "next/image";
// interface Frontmatter {
//   title: string;
// }

export default async function Home() {
  // const filenames = await fs.readdir(
  //   path.join(process.cwd(), "src/app/notes")
  // );
  // const titles = await Promise.all(
  //   filenames.map(async (filename) => {
  //     // Get the full path of the file
  //     const fullPath = path.join(
  //       process.cwd(),
  //       "src/app/cfa-level-1",
  //       filename
  //     );

  //     // Check if the path is a directory or a file
  //     const stat = await fs.stat(fullPath);
  //     if (stat.isDirectory()) {
  //       return null; // Skip directories
  //     }
  //     const content = await fs.readFile(fullPath, "utf-8");

  //     // Process the MDX content and frontmatter
  //     const { frontmatter } = await compileMDX<Frontmatter>({
  //       source: content,
  //       options: {
  //         parseFrontmatter: true,
  //       },
  //     });

  //     return { filename, slug: filename.replace(".mdx", ""), ...frontmatter };
  //   })
  // );

  // // Filter out any `null` values (which represent skipped directories)
  // const validTitles = titles.filter((title) => title !== null);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Free Analyst Notes</h1>
        <div>
          We offer comprehensive cheat sheets for all three levels of the CFA
          exams. Study for free here or purchase a full printable cheatsheet.
        </div>

        {/* {validTitles.map(({ title, slug }) => {
          return (
            <div key={title + slug}>
              <div>{title}</div>
              <Link href={`study/${slug}`}>{slug}</Link>
            </div>
          );
        })} */}
        {/* <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        /> */}
        {/* <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol> */}

        {/* <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          > */}
        {/* <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            /> */}
        {/* Deploy now */}
        {/* </a> */}
        {/* <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div> */}
      </main>
      {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        > */}
      {/* <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          /> */}
      {/* Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        > */}
      {/* <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          /> */}
      {/* Examples
        </a> */}
      {/* <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        > */}
      {/* <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          /> */}
      {/* Go to nextjs.org → */}
      {/* </a> */}
      {/* </footer> */}
    </div>
  );
}
