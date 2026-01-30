import type { MDXComponents } from "mdx/types";
import Note from "./components/Note";
import Caution from "./components/Caution";
import PageHeader from "./components/PageHeader";
import PageFooter from "./components/PageFooter";
import Math from "./components/Math";
import InlineMath from "./components/InlineMath";
import MathLegend from "./components/MathLegend";
import Quote from "./components/Quote";

// You don’t need a `useMDXComponents` function if you're not modifying anything.
export const mdxComponents: MDXComponents = {
  Note,
  Caution,
  PageHeader,
  PageFooter,
  Math,
  InlineMath,
  MathLegend,
  Quote,
};
