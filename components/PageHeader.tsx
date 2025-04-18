import React from "react";
import Link from "next/link";

const PageHeader = () => {
  return (
    <header className="fixed w-full h-12 bg-slate-900 border-b-2 border-slate-100/50">
      <nav className="flex mx-auto justify-between mb-10 container px-4 md:px-8">
        <div className="flex items-center text md:text-2xl font-bolder hover:underline font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-200">
          <Link href="/">Free Analyst Notes</Link>
        </div>
        <ul className="flex gap-2 text-slate-500 list-none uppercase font-bold">
          <li className="hover:text-slate-400">
            <Link href="/study">Study</Link>
          </li>
          <li className="hover:text-slate-400">
            <Link href="../About">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default PageHeader;
