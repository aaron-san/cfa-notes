import withMDX from "@next/mdx";

// const isProd = process.env.NODE_ENV === "production";

// console.log("✅ Using next.config (ESM)");
// throw new Error("🧪 Testing config load");

const config = {
  pageExtensions: ["ts", "tsx", "mdx"],
  output: "export", // Enables static HTML export
  images: {
    unoptimized: true,
  },
  experimental: {
    mdxRs: false,
  },
  // basePath: isProd ? "/cfa-notes" : "",
  // assetPrefix: isProd ? "/cfa-notes/" : "",
};

export default withMDX({
  extension: /\.mdx?$/,
})(config);
