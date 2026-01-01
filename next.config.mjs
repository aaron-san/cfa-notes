import withMDX from "@next/mdx";

const isProd = process.env.NODE_ENV === "production";
// console.log(process.env.NODE_ENV);
// console.log(isProd);

const config = {
  pageExtensions: ["js", "mjs", "ts", "tsx", "mdx"],
  output: "export", // Enables static HTML export
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    mdxRs: false, 
  },
  basePath: isProd ? "/cfa-notes" : "",
  assetPrefix: isProd ? "/cfa-notes/" : "",
};

export default withMDX({
  extension: /\.mdx?$/,
})(config);
