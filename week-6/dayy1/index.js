// console.log("im in node");
// npm node package manager
// nvm node version manager
 const cowsay = require("cowsay")

//  console.log(cowsay.say({}))

const express = require("express");
const app = express();

//  app.get("/", (req,res) => { res.send("Hello World")});
//  app.listen(3000, console.log("Howdy"));

//  app.put("/", (req,res) => { res.send("Meow")});
//  app.listen(3001);

//  app.post("/", (req,res) => { res.send("Woof")});
//  app.listen(3001); 

// app.delete("/", (req,res) => { res.send("Dogs and cats living together.... mass hysteria!!")});
// app.listen(3001);


// app.put("/", (req,res) => { res.send(`<h1>Hello World</h1>`)});
// app.listen(3001);

app.get("/getNames", (req,res) => {console.log(req);
res.send(`<h1>Hello World</h1>`)});
app.listen(3001);
