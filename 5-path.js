const path = require('path');

// console.log(path.sep);
const filePath = path.join("/Content", "/Subcontent", "text.js")
// console.log(filePath);
const base = path.basename(filePath)
// console.log(base);
const absolute = path.resolve(__dirname, "Content","Subcontent","test.js")
console.log(absolute);

