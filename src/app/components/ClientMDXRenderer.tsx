"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

type ComponentsMap = {
  Note: React.ComponentType<{ children: React.ReactNode }>;
  Highlight: React.ComponentType<{ text: string }>;
  // Add other components here
};

type ClientMDXRendererProps = {
  compiledSource: MDXRemoteSerializeResult;
  components?: Partial<ComponentsMap>; // Use Partial if not all components are always provided
};

const ClientMDXRenderer: React.FC<ClientMDXRendererProps> = ({
  compiledSource,
  components,
}) => {
  return <MDXRemote {...compiledSource} components={components} />;
};

export default ClientMDXRenderer;
