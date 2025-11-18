import React from "react";
import TopicsLink from "@/components/TopicsLink";

const Title: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="mb-2 border-slate-100/50 border-b">
      <h2>{children}</h2>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to Free CFA Notes!</h1>
      <p>Start learning today for the next exam.</p>

      <div className="flex flex-wrap gap-4 dark:bg-slate-600 my-4 p-4 border dark:border-slate-100/50 rounded">
        <div className="relative">
          <Title>CFA Level 1</Title>
          <div>
            The CFA level one exam covers a wide array of topics including
            statistics, economics, finance, and more. Learn how to do basic
            quantitative analysis on company data and how to understand the
            trends in the economy.
          </div>
          <TopicsLink href={"/cfa-level-1-topics"} />
        </div>
      </div>
      <div className="flex flex-wrap gap-4 dark:bg-slate-600 my-4 p-4 border dark:border-slate-100/50 rounded">
        <div className="relative">
          <Title>CFA Level 2</Title>
          <div>
            The CFA level two exam covers more advanced topics in finance
            including regression, ...
          </div>
          <TopicsLink href={"/cfa-level-2-topics"} />
        </div>
      </div>
      <div className="flex flex-wrap gap-4 dark:bg-slate-600 my-4 p-4 border dark:border-slate-100/50 rounded">
        <div className="relative">
          <Title>CFA Level 3</Title>
          <div>
            The CFA level three exam focuses on portfolio management and wealth
            planning. It is the final exam in the CFA program and covers
            advanced topics in finance and investment management.
          </div>
          <TopicsLink href={"/cfa-level-3-topics"} />
        </div>
      </div>
    </div>
  );
};

export default Home;
