const cowsay = require("cowsay")
const express = require("express")
const app = express();





// First Get Route
// const cowsay = require("cowsay")
// const express = require("express")
// const app = express();
// // get routes:
// get routes getCowUserName getCowAppointment 


// app.get("/getCowUserName", (req,res) => {res.send(
//     cowsay.say({
//         text : "Adding Cow Name",
//         e : "oO",
//         T : "U "
//     })
// )});
// app.listen(3000);

// Route get 2 
// app.get("/getAppointment", (req,res) => {res.send(
//     cowsay.say({
//         text : "Adding Cow Appointment",
//         e : "oO",
//         T : "U "
//     })
// )});
// app.listen(3000);
// First Post ROute
// app.post("/sendCowAppointment", (req,res) => {res.send(
//     cowsay.think({
//         text : "Send cow appointment time",
//         e : "oO",
//         T : "U "
//     })
// )});
// app.listen(3000);

// Second Post route
// app.post("/sendCowUserName", (req,res) => {res.send(
//     cowsay.say({
//         text : "Send cow name",
//         e : "oO",
//         T : "U "
//     })
// )});
// app.listen(3000);


// Delete ROUte
app.delete("/deleteCowUserName", (req,res) => {
    res.send(console.log("cow user deleted"))});
app.listen(3000)