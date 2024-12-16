"use client";

import React from "react";

const Caution = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-4 my-2 py-2 border border-red-500 rounded bg-red-100 text-red-700">
      {children}
    </div>
  );
};

export default Caution;
