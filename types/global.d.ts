declare module "remark-mdx-frontmatter" {
  const plugin: import("unified").Plugin;
  export default plugin;
}

declare module "to-vfile" {
  interface VFile {
    path?: string;
    basename?: string;
    extname?: string;
    dirname?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  }

  function read(filePath: string | VFile): Promise<VFile>;
  function write(file: VFile): Promise<VFile>;
  function load(filePath: string | VFile): VFile;

  export { VFile, read, write, load };
  export default load;
}
