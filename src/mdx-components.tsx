/* eslint-disable @typescript-eslint/no-explicit-any */

import type { ComponentType, ReactNode } from "react";

export type MDXComponents = {
  [key: string]: ComponentType<{ children?: ReactNode } & Record<string, any>>;
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    // h1: (props) => <h1 className="text-3xl font-bold" {...props} />,
    // Add more custom components here
  };
}
