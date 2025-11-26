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
      <h1>Welcome to Free CFA&reg; Notes!</h1>
      <p>Start learning today for the next exam.</p>

      <div className="flex flex-wrap gap-4 dark:bg-slate-700 my-4 p-4 border dark:border-slate-100/50 rounded">
        <div className="relative">
          <Title>CFA&reg; Level 1</Title>
          <div>
            The CFA&reg; level one exam covers a wide array of topics including
            statistics, economics, finance, and more. Learn how to do basic
            quantitative analysis on company data and how to understand the
            trends in the economy.
          </div>
          <TopicsLink href={"/topics/cfa-level-1"} />
        </div>
      </div>
      <div className="flex flex-wrap gap-4 dark:bg-slate-600 my-4 p-4 border dark:border-slate-100/50 rounded">
        <div className="relative">
          <Title>CFA&reg; Level 2</Title>
          <div>
            The CFA&reg; level two exam covers more advanced topics in finance
            including regression, ...
          </div>
          <TopicsLink href={"/topics/cfa-level-2"} />
        </div>
      </div>
      <div className="flex flex-wrap gap-4 dark:bg-slate-600 my-4 p-4 border dark:border-slate-100/50 rounded">
        <div className="relative">
          <Title>CFA&reg; Level 3</Title>
          <div>
            The CFA&reg; level three exam focuses on portfolio management and
            wealth planning. It is the final exam in the CFA&reg; program and
            covers advanced topics in finance and investment management.
          </div>
          <TopicsLink href={"/topics/cfa-level-3"} />
        </div>
      </div>
      <div className="flex flex-wrap gap-4 dark:bg-slate-600 my-4 p-4 border dark:border-slate-100/50 rounded">
        <div className="relative">
          <Title>CAIA Level 1</Title>

          <TopicsLink href={"/topics/caia-level-1"} />
        </div>
      </div>
      <div className="flex flex-wrap gap-4 dark:bg-slate-600 my-4 p-4 border dark:border-slate-100/50 rounded">
        <div className="relative">
          <Title>CAIA Level 2</Title>

          <TopicsLink href={"/topics/caia-level-2"} />
        </div>
      </div>
    </div>
  );
};

export default Home;
