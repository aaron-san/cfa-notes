import React from "react";
import Link from "next/link";

const TopicsLink = ({ href }: { href: string }) => {
  return (
    <div>
      <Link
        href={href}
        className="inline-block z-10 relative dark:bg-slate-300 dark:hover:bg-slate-200 mt-4 px-8 py-1 border-1 text-slate-100 dark:text-slate-800 hover:cursor-pointer"
        // className="inline-block z-10 relative bg-slate-800 dark:bg-gradient-to-r dark:from-green-300 dark:to-green-200 mt-4 py-2 pr-4 pl-2 border-2 dark:border-green-200 rounded-r-[20px] rounded-l-md text-slate-100 dark:text-slate-800 hover:cursor-pointer"
      >
        Study!
      </Link>
      {/* <div className="bottom-[8px] left-[48px] sm:left-[50px] z-0 absolute bg-green-200 rounded w-7 h-7 rotate-45"></div> */}
    </div>
  );
};

export default TopicsLink;
