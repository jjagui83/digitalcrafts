// Write a function to return the maximum occurring character in the input string e.g., if input string is "Test" then function should return 't'.

const express = require("express");
const app = express();
app.use(express.json());
const PORT = 3000
str1 = "holddogecoinkek"
// result: o
str2 = "aahhanotheralgo"
// result: a
str3 = "randywhyyyyy"
// result: y

const maxChar = str => {
    const myStr = str.toLowerCase();
    // in case string has capitalized characters
    const charMap = {};
    let max = 0;
    let maxChar = '';
  
    for (let char of myStr) {
      if (!charMap[char]) {
        charMap[char] = 1;
      } else {
        charMap[char]++;
      }
    }
  
    for (let char in charMap) {
      if (charMap[char] > max) {
        max = charMap[char];
        maxChar = char;
      }
    }
  
    return console.log(maxChar);
 }

 maxChar(str1)
 maxChar(str2)
 maxChar(str3)
 console.log("algos hurt my brain");
//  console.log(maxChar);

//  app.get("/", (req,res) =>{
//     console.log(req);
//     res.send()});

//  app.listen(PORT, console.log(`listening on ${PORT}`))