import React from "react";
import Link from "next/link";

const TopicCard = ({
  title,
  href,
  children,
}: {
  title: string;
  href: string;
  children?: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      className={`flex flex-wrap gap-4 dark:bg-slate-700 dark:hover:bg-slate-600 p-4 border border-slate-500 hover:bg-slate-100 dark:border-slate-100/50 rounded w-[200px]`}
    >
      <div className="relative">
        <div className="mx-auto border-slate-100/50 w-full font-bold">
          {title}
        </div>
        <div>{children}</div>
        <div className="flex justify-end">
          {/* <TopicLink href={href} /> */}
        </div>
      </div>
    </Link>
  );
};

export default TopicCard;
