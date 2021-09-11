require("dotenv").config();
const express = require("express");
const token = process.env.API_TOKEN;
const URL = process.env.URL;
const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(URL, token);
const PORT = 3001;

const app = express();

// middleware starts
app.use(express.json());
// middleware ends





// created stock database
app.post("/createStock", async (req, res) => {
    
    const { data, error } = await supabase.from("Stocks").insert(req.body);
     res.send(console.log(`stock added ${req.body.name}`));
  });
  
  

  

// ****

// check to "view" data 
app.get("/createStock", async (req, res) => {
    
    const { data, error } = await supabase.from("Stocks").select();
     res.send(data);
  });
  
// update stocks

app.put("/stocksUpdate/:stockID", async(req,res) => {
    const id = req.params.stockID
    const{data,error} = await supabase
    .from("Stocks")
    .update(req.body)
    .match({id:id})
    res.send(console.log(data))
})
// *********

app.delete("/deleteStock/:stockID", async (req,res) => {
  const id = req.params.stockID;
  const{data,error} = await supabase
  .from("Stocks")
  .delete()
  .match({id:id})
  console.log(data);
  console.log(error);
  res.send(data)
})


app.listen(PORT, console.log(`listening on ${PORT}`));

