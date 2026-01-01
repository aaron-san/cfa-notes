import React from "react";

// Escape math in the text environment with $ (e.g., $\\times$)
export default function MathLegend({ children }: { children: string }) {
  return (
    <div className="ml-8 max-w-[80%] text-sm">
      <div className="font-bold">where:</div>
      <div className="flex flex-col gap-y-1 ml-4">{children}</div>
    </div>
  );
}
