import "katex/dist/katex.min.css";
import katex from "katex";
import React from "react";


// Escape math in the text environment with $ (e.g., $\\times$)
export default function Math({ children }: { children: string }) {
  const html = katex.renderToString(
    "\\mathrm {\\small { \\text {" + children + "}}}",
    {
      throwOnError: false,
      displayMode: true,
    }
  );

  return (
    <div
      className="katex-container"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
