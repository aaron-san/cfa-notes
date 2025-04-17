import React from "react";
import Note from "@/components/Note";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to My Next App!</h1>
      <p>This is the homepage of your Next.js application.</p>
      <div className="bg-cyan-300">div with colored bg</div>
      <Note>This is a note</Note>
    </div>
  );
};

export default Home;
