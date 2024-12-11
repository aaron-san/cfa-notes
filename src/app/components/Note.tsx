"use client";

import React from "react";

const Note = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-4 my-2 py-2 border border-cyan-500 rounded bg-cyan-100 text-cyan-700">
      {children}
    </div>
  );
};

export default Note;
