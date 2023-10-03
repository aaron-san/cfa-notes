const fs = require("fs");
const ejs = require("ejs");
const path = require("path");

ejs.compileFile = function (filePath, options) {
  let templatePath = filePath;
  if (options && options.root)
    templatePath = path.resolve(options.root, templatePath);
  const templateStr = ejs.fileLoader(templatePath, "utf8");
  options = Object.assign({ filename: templatePath }, options);
  return ejs.compile(templateStr, options);
};

const templatePath = path.resolve(__dirname, "./views/index.ejs");
const template = ejs.compileFile(templatePath);
console.log(typeof template);
// fs.writeFileSync("index.ejs", template);
