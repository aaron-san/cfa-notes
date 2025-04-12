// filepath: c:\Users\aaron\Desktop\Web Projects\Next\cfa-notes\next.config.js
const createMDX = require("@next/mdx");
const rehypeHighlight = require("rehype-highlight");
const rehypeKatex = require("rehype-katex");
const remarkMath = require("remark-math");
const remarkFrontMatter = require("remark-frontmatter");

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  experimental: {
    mdxRs: false,
  },
};

const withMDX = createMDX({
  options: {
    rehypePlugins: [rehypeHighlight, rehypeKatex],
    remarkPlugins: [remarkMath, remarkFrontMatter],
  },
});

module.exports = withMDX({
  ...nextConfig,
  output: "export",
  assetPrefix: isProd ? "/cfa-notes/" : "",
  images: {
    unoptimized: true,
  },
});
