import createMDX from "@next/mdx";
import rehypeHighlight from "rehype-highlight";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import remarkFrontMatter from "remark-frontmatter";
// import * as frontmatterPlugin from "./src/app/lib/frontmatter";

const nextConfig: import("next").NextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  // experimental: {
  //   mdxRs: true, // Enable MDX support,
  // },
  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.mdx$/,
  //     use: [
  //       {
  //         loader: "next-mdx-remote/loader",
  //         options: {
  //           rehypePlugins: [rehypeHighlight, rehypeKatex],
  //           remarkPlugins: [remarkMath],
  //         },
  //       },
  //     ],
  //   });
  //   return config;
  // },
};

const withMDX = createMDX({
  options: {
    rehypePlugins: [rehypeHighlight, rehypeKatex],
    remarkPlugins: [remarkMath, remarkFrontMatter],
    // remarkPlugins: [remarkMath, remarkFrontMatter],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
