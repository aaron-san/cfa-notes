import "katex/dist/katex.min.css";
import katex from "katex";
import React from "react";


// Escape math in the text environment with $ (e.g., $\\times$)
export default function Math({ children }: { children: string }) {
  const html = katex.renderToString(
    "\\mathrm {\\small { \\text {" + children + "}}}",
    {
      throwOnError: false,
      displayMode: false,
    }
  );

  return (
    <span
      className="p-0 border-none font-['Poppins']"
      id="inline-math"
      // style={{border: "none", padding: "none"}}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
