// names should be h1
// address should be h3
// state should be a p
// h1 should be colored red
// h3 should be colored blue
// state should be colored yellow

const express = require("express");
const es6Renderer = require("express-es6-template-engine");
const app = express();
const PORT = 3002;


const characters = [
    { name: "Jordan", address: "123 Main St", state: "GA" },
    { name: "Whitney", address: "123 Main St", state: "FL" },
    { name: "Tay", address: "123 Main St", state: "TX" },
    { name: "Michael", address: "23 Tomball St", state: "WA" },
    { name: "Calvin", address: "2020 RightLeft St", state: "PH" },
    { name: "Kendall", address: "465 Right St", state: "LA" },
    { name: "Patrick", address: "123 Colorado St", state: "TX" },
  ];

const es6Rederer = require("express-es6-template-engine")
app.engine('html', es6Renderer);
app.set('views', 'templates')
app.set('view engine', 'html')




app.get("/", (req,res) =>{

res.render(
    'characters', {
        locals: {
            characters,
        }
    }
);
});
app.use("/public", express.static("public"));
app.listen(PORT, console.log(`listening on port ${PORT}`));
