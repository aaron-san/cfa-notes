const http = require("http");
const path = require("path");
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
import serverless from "serverless-http";

const md = require("markdown-it")();
const mk = require("@iktakahiro/markdown-it-katex");
md.use(mk);

const app = express();

const postsRouter = require("../../postsRouter.js");
app.use("/posts", postsRouter);

app.use(express.static("public"));
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

// Global array to store all entries
let entries = [];
// Makes this entries array available in all views
app.locals.entries = entries;

// Use Morgan to log every request
app.use(logger("dev"));

// Populate a variable called req.body if the user is submitting a form
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/new-entry", (req, res) => {
  res.render("new-entry");
});

// app.get("/post/:post", (req, res) => {
//   const postName = req.params.post;
//   const files = fs.readdirSync("md").map((file) => file.replace(".md", ""));
//   if (!files.includes(postName)) res.status(400).render("404");

//   let { data: frontmatter, content } = matter.read(
//     path.join("md", postName + ".md")
//   );
//   const text = md.render(content);
//   // res.send({ frontmatter, content });
//   res.render("post", { frontmatter, text });

//   // res.send("new-entry");
// });

app.post("/new-entry", (req, res) => {
  console.log(req.body);
  if (!req.body.title || !req.body.body) {
    res.status(400).send("Entries must have a title and a body.");
    return;
  }
  entries.push({
    title: req.body.title,
    content: req.body.body,
    published: new Date(),
  });
  res.redirect("/");
});

app.use((req, res) => {
  res.status(404).render("404");
});

export const handler = serverless(app);

http.createServer(app).listen(3000, () => {
  console.log("Guestbook app started on port 3000.");
});
