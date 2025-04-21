import React from "react";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to Free CFA Notes!</h1>
      <p>Start learning today for the next exam.</p>

      <div className="flex flex-wrap gap-4 dark:bg-slate-600 my-4 p-4 border dark:border-slate-100/50 rounded">
        <div className="relative">
          <h2>CFA Level 1</h2>
          <div>
            The CFA level one exam covers a wide array of topics including
            statistics, economics, finance, and more. Learn how to do basic
            quantitative analysis on company data and how to understand the
            trends in the economy.
          </div>
          <Link
            href="/cfa-level-1-topics"
            className="inline-block z-10 relative bg-slate-800 dark:hover:bg-slate-200 dark:bg-gradient-to-r dark:from-slate-400 dark:to-slate-300 mt-4 py-2 pr-4 pl-2 rounded-r-[20px] hover:rounded-r-[30px] rounded-l-md text-slate-100 dark:text-slate-800 hover:cursor-pointer"
          >
            Study!
          </Link>
          <div className="bottom-[8px] left-[46px] sm:left-[49px] z-0 absolute bg-slate-300 rounded w-6 h-6 rotate-45"></div>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 dark:bg-slate-600 my-4 p-4 border dark:border-slate-100/50 rounded">
        <div className="relative">
          <h2>CFA Level 2</h2>
          <div>
            The CFA level two exam covers more advanced topics in finance
            including regression, ...
          </div>
          <Link
            href="/cfa-level-2-topics"
            className="inline-block z-10 relative bg-slate-800 dark:hover:bg-slate-200 dark:bg-gradient-to-r dark:from-slate-400 dark:to-slate-300 mt-4 py-2 pr-4 pl-2 rounded-r-[20px] hover:rounded-r-[30px] rounded-l-md text-slate-100 dark:text-slate-800 hover:cursor-pointer"
          >
            Study!
          </Link>
          <div className="bottom-[8px] left-[46px] sm:left-[49px] z-0 absolute bg-slate-300 rounded w-6 h-6 rotate-45"></div>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 dark:bg-slate-600 my-4 p-4 border dark:border-slate-100/50 rounded">
        <div className="relative">
          <h2>CFA Level 3</h2>
          <div>
            The CFA level three exam focuses on portfolio management and wealth
            planning. It is the final exam in the CFA program and covers
            advanced topics in finance and investment management.
          </div>
          <Link
            href="/cfa-level-3-topics"
            className="inline-block z-10 relative bg-slate-800 dark:hover:bg-slate-200 dark:bg-gradient-to-r dark:from-slate-400 dark:to-slate-300 mt-4 py-2 pr-4 pl-2 rounded-r-[20px] hover:rounded-r-[30px] rounded-l-md text-slate-100 dark:text-slate-800 hover:cursor-pointer"
          >
            Study!
          </Link>
          <div className="bottom-[8px] left-[46px] sm:left-[49px] z-0 absolute bg-slate-300 rounded w-6 h-6 rotate-45"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
