const express = require("express");
const es6Renderer = require("express-es6-template-engine");
const app = express();
const PORT = 3002;
// const student = {name: "Jose"}
const students = [
    {name: "Jose" },
    {name: "David" },
    {name: "Mike" }];

const es6Rederer = require("express-es6-template-engine")
app.engine('html', es6Renderer);
app.set('views', 'templates')
app.set('view engine', 'html')

app.get("/", (req,res) => {
    // let list = `<ul>`
    // for (let student of students){
    //     list += `<li>
    //     <p> ${student.name} </p>
    //     </li>`
    // }
    // list += `</ul>`;
    // console.log(list);
    
    res.render(
        'home', {
            locals: {
                students,
            }
        }
    );
});

app.listen(PORT, console.log(`listening on port ${PORT}`));