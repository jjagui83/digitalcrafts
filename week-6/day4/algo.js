const express = require("express");
const app = express();
app.use(express.json());
const PORT = 3000
const str = "09/10/2021";

let newDate = "20210919";
// let month = "09";
// let day = "19";
// let year = "2021"; 
// let newDate = (year,day,month);

function formatDate() {
    if (str === "09/10/2021");    
    return newDate    
}
console.log(formatDate());


app.get("/date", (req,res) => {
    res.send(formatDate())
})
//  console.log(formatDate)
 app.listen(PORT, console.log(`listening on port ${PORT}`))

//  anagram algo
const array = [
    ("act", "aide", "ape", "use", "ring", "sink", "night", "skill")
]

function anagram() {
    const chars = str.split.sort.inc

}