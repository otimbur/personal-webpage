const path = require("path");

// separator proprety
console.log(path.sep);

//
const filePath = path.join("/content", "subfolder", "text.txt");
console.log(filePath);

// base name
const basename = path.basename(filePath);
console.log(basename);

// returns an absolute path
const absolutepath = path.resolve(
  __dirname,
  "content",
  "subforlder",
  "text.txt"
);
console.log(absolutepath);
