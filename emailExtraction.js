const fs = require("fs");
const file = fs.readFileSync("test.txt", "utf-8");

  /* 2nd Exercise - using RegEx */
  const regex = /\S+(@softwire\.com)\b/g;
  const matches = [...file.matchAll(regex)];
  console.log(`Emails found with "@softwire.com:" ${matches.length}`);