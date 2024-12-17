import { compileMDX } from "next-mdx-remote/rsc";
import { promises as fs } from "fs";
import path from "path";
// import remarkFrontMatter from "remark-frontmatter";
import type { Metadata } from "next";
import Link from "next/link";
import { getCleanedSlug } from "@/src/utils/utils";
// import next from "next";
// import Image from "next/image";

export const metadata: Metadata = {
  title: "CFA Notes",
};

interface Frontmatter {
  title: string;
}

export default async function Study() {
  const contentDir = path.join(process.cwd(), "src/app/notes");

  const getFileNames = async (dir: string) => {
    let fileNames: string[] = [];
    const content = await fs.readdir(dir);
    // console.log(content);
    for (const x of content) {
      const fullPath = path.join(dir, x);
      const stat = await fs.stat(fullPath);
      if (stat.isDirectory()) {
        const nestedFileNames = await getFileNames(fullPath);
        fileNames = [...fileNames, ...nestedFileNames];
      } else if (stat.isFile()) {
        fileNames = [...fileNames, fullPath];
      }
    }

    return fileNames;
  };

  const filenames = await getFileNames(contentDir);
  // console.log("Filenames: ", filenames);
  interface Titles {
    filename: string;
    // label: string;
    slugX: string;
    frontmatter?: Frontmatter;
  }
  let titleArr: Titles[] = [];

  const getTitles = async () => {
    for (const filename of filenames) {
      // const { folder, label } = filename;

      const content = await fs.readFile(filename, "utf-8");

      // Process the MDX content and frontmatter
      const { frontmatter } = await compileMDX<Frontmatter>({
        source: content,
        options: {
          parseFrontmatter: true,
        },
      });

      titleArr = [
        ...titleArr,
        {
          filename,
          slugX: filename.replace(contentDir, "").replace(".mdx", ""),
          ...frontmatter,
        },
      ];
    }
    return titleArr;
  };

  const titles = (await getTitles()).filter(
    (title) => !title.slugX.match(/[2-9]$/)
  );

  const folders = titles.map((x) => {
    const endId = x.slugX.lastIndexOf(path.sep);
    return x.slugX.slice(1, endId);
  });
  const groupsToExclude = ["other", "valuation"];
  const groups = [...new Set(folders)].filter(
    (group) => !groupsToExclude.includes(group)
  );

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-start justify-items-start min-h-screen p-8 pb-20 gap-1 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start">
        <h1>Study Topics</h1>
        <div className="tracking-wider">
          Get cheat sheets for all three levels of the CFA exams. Study for free
          here or purchase a full printable cheatsheet.
        </div>

        {groups.map((group: string) => {
          return (
            <div key={group}>
              <h2>
                {group
                  .split("-")
                  .map((x) => `${x[0].toUpperCase()}${x.slice(1)}`)
                  .map((x) => `${x.replace(/cfa/gi, "CFA")}`)
                  .join(" ")}
              </h2>
              <div className="flex flex-wrap gap-1 justify-start">
                {titles
                  .filter(({ slugX }) => slugX.match(new RegExp(group)))
                  .map(({ filename, slugX }) => {
                    return (
                      <button
                        className="px-4 flex-auto py-2 border border-slate-700 text-slate-700 shadow rounded hover:bg-slate-100 text-xl bg-white"
                        key={filename + slugX}
                      >
                        <Link href={path.join("study", slugX)}>
                          {getCleanedSlug(slugX)}
                        </Link>
                      </button>
                    );
                  })}
              </div>
            </div>
          );
        })}
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
