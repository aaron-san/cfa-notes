import React from "react";

const Note = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-4 py-2 border border-blue-400 rounded bg-blue-300 text-blue-950">
      {children}
    </div>
  );
};

export default Note;
