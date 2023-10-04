const path = require("path");
const express = require("express");

const fs = require("fs");
const md = require("markdown-it")();
const mk = require("@iktakahiro/markdown-it-katex");
const matter = require("gray-matter");
md.use(mk);

const postsRouter = express.Router();
// app.set("views", path.resolve(__dirname, "views"));

postsRouter.get("/:post", (req, res) => {
  const postName = req.params.post;
  const files = fs.readdirSync("md").map((file) => file.replace(".md", ""));
  if (!files.includes(postName)) res.status(400).render("pages/404");

  // console.log(path.join("md", postName + ".md"));
  let { data: frontmatter, content } = matter.read(
    path.join("md", postName + ".md")
  );
  const text = md.render(content);
  // res.send({ frontmatter, content });
  res.render("pages/post", { frontmatter, text });

  // res.send("new-entry");
});

module.exports = postsRouter;
