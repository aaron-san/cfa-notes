import React from "react";
import TopicCard from "@/components/TopicCard";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to Free Analyst Notes!</h1>
      <p>Start learning today for the next exam.</p>
      <p>Choose a topic to get started:</p>
      <div className="flex flex-wrap gap-2 mt-4">
        <TopicCard title={"CFA® Level 1"} href={"/topics/cfa-level-1"}>
          {/* The CFA® level one exam covers a wide array of topics including
        statistics, economics, finance, and more. Learn how to do basic
        quantitative analysis on company data and how to understand the trends
        in the economy. */}
        </TopicCard>

        <TopicCard title={"CFA® Level 2"} href={"/topics/cfa-level-2"}>
          {/* The CFA® level 2 exam covers more advanced topics in finance
        including regression, ... */}
        </TopicCard>

        <TopicCard title={"CFA® Level 3"} href={"/topics/cfa-level-3"}>
          {/* The CFA® level 3 exam focuses on portfolio management and wealth
        planning. It is the final exam in the CFA® program and covers
        advanced topics in finance and investment management. */}
        </TopicCard>

        <TopicCard
          title={"CAIA Level 1"}
          href={"/topics/caia-level-1"}
        ></TopicCard>

        <TopicCard
          title={"CAIA Level 2"}
          href={"/topics/caia-level-2"}
        ></TopicCard>
      </div>
    </div>
  );
};

export default Home;
