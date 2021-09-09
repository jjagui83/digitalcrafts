const express = require('express');
const app = express();
const PORT = 3001;
const {createClient} = require("@);
const supabase = createClient(

  const userData = {
    name: "jose",
    lastName: "aguilar",
    userID: "7087097097",
    address: "123 Main",
    contactInfro: {
        phone: "123-123-123",
        email: "jose@yahoo.com",
    }
}







// middleware starts
app.use(express.json());

// middleware ends

app.post("/createStudent", async(req,res) => {
    console.log(req.body);
    const { data, error } = await supabase.from('studentData').insert([req.body]);






    console.log(req.body);
    res.send(console.log(`the user is ${req.body.name}`))
    
})

app.get("/createStudent", async(req,res) => {
    
    const { data, error } = await supabase.from('studentData').insert([req.body]);
    res.send(data),

    res.send(console.log(`the user is ${req.body.name}`))
 
})

app.put("/createStudent", async(req,res) => {
    
    const { data, error } = await supabase
    .from("studentData")
    .update({name: "Aggie"})
    .match({id: 2})
    res.send(data);
    console.log(data);
    console.log(error);
    res.send(console.log(`the user is ${req.body.name}`))
 
})


app.listen(PORT, console.log(`listening on ${PORT}`))