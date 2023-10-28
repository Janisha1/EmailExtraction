const fs = require("fs");
const file = fs.readFileSync("test.txt", "utf-8");

/* Part 3 - Using a Dictionary */
const regex = /\b[\w]+@([\w.\-\+~]+)\b/g;
const matches = [...file.matchAll(regex)];
const domainDictionary = {};
for (let i=0; i<matches.length; i++) {
  const domain = (matches[i][1]);
  if(Object.keys(domainDictionary).includes(domain)){
    domainDictionary[domain] ++;
  } else {
    domainDictionary[domain] = 1;
  }
}
const domainArray = [];
for (let domain in domainDictionary) {
  domainArray.push([domain, domainDictionary[domain]]);
}
domainArray.sort((a,b) => b[1] - a[1]);
console.log(domainArray);