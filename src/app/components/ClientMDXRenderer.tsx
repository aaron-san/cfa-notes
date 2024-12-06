"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

export default function ClientMDXRenderer({
  compiledSource,
}: {
  compiledSource: MDXRemoteSerializeResult;
}) {
  return <MDXRemote {...compiledSource} />;
}
