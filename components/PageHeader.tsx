import React from "react";
import Link from "next/link";

const PageHeader = () => {
  return (
    <header className="z-20 fixed flex items-center bg-slate-900 border-slate-100/50 border-b-2 w-full h-12">
      <nav className="flex justify-between items-center mx-auto px-4 md:px-8 container">
        <div className="flex items-center bg-clip-text bg-gradient-to-r from-slate-400 to-slate-200 font-bolder font-extrabold text-transparent md:text-2xl hover:underline text">
          <Link href="/">Free Analyst Notes</Link>
        </div>
        <ul className="flex gap-2 font-bold text-slate-500 list-none">
          <li className="hover:text-slate-400">{/* Study */}</li>
          <li className="mt-0 hover:text-slate-400 list-none">
            <Link className="list-none" href="../about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default PageHeader;
