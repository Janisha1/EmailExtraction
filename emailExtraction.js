const fs = require("fs");
const file = fs.readFileSync("test.txt", "utf-8");

let counter = 0;

for(let i=0; i<file.length; i++){
  if(file.substring(i, i+14) === "@softwire.com " || file.substring(i, i+15) === "@softwire.com\r\n") {
    counter++;
  }
}

console.log(counter);