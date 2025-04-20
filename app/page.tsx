import React from "react";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to Free CFA Notes!</h1>
      <p>Start learning today for the next exam.</p>

      <div className="dark:bg-slate-600 rounded p-4 shadow-md my-4 flex gap-4">
        <Link
          href="/cfa-level-1-topics"
          className="rounded p-4 border border-slate-1 dark:hover:bg-slate-500 hover:cursor-pointer"
        >
          CFA Level 1
        </Link>
        <Link
          href="/cfa-level-2-topics"
          className="rounded p-4 border border-slate-1 dark:hover:bg-slate-500 hover:cursor-pointer"
        >
          CFA Level 2
        </Link>
        <Link
          href="/cfa-level-3-topics"
          className="rounded p-4 border border-slate-1 dark:hover:bg-slate-500 hover:cursor-pointer"
        >
          CFA Level 3
        </Link>
      </div>
    </div>
  );
};

export default Home;
