import "katex/dist/katex.min.css";
import katex from "katex";
import React from "react";

export default function Math({ children }: { children: string }) {
  const html = katex.renderToString(children, {
    throwOnError: false,
    displayMode: true,
  });

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
