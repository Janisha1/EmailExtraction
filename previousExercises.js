const fs = require("fs");
const file = fs.readFileSync("test.txt", "utf-8");

/* Part 1 - A naive approach *******************************************************************************/
let counter = 0;
for(let i=0; i<file.length; i++){
  if(file.substring(i, i+14) === "@softwire.com " || file.substring(i, i+15) === "@softwire.com\r\n") {
    counter++;
  }
}
console.log(counter);
/***********************************************************************************************************/


/* 2nd Exercise - using RegEx ******************************************************************************/
const regex = /\S+(@softwire\.com)\b/g;
const matches = [...file.matchAll(regex)];
console.log(`Emails found with "@softwire.com:" ${matches.length}`);
/***********************************************************************************************************/
