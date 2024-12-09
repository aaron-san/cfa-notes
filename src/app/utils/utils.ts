const TITLELENGTH = 25;
export const getSubstring = (title: string) => {
  return title.length <= 10 ? title : title.substring(0, TITLELENGTH) + "...";
};

export const getCleanedSlug = (slug: string) => {
  return slug
    .split("-")
    .map((x) => `${x[0].toUpperCase()}${x.slice(1)}`)
    .join(" ")
    .replace(/ 1$/, "");
};
