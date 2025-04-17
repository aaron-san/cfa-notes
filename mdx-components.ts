import type { MDXComponents } from "mdx/types";
import Note from "./components/Note";
import Caution from "./components/Caution";

// You don’t need a `useMDXComponents` function if you're not modifying anything.
export const mdxComponents: MDXComponents = {
  // Example component:
  Note,
  Caution,
};
