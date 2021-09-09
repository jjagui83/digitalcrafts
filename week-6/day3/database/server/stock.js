require("dotenv").config();
const express = require("express");
const token = process.env.API_TOKEN;
const URL = process.env.URL;
const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(URL, token);


const app = express();

// middleware starts
app.use(express.json());
// middleware ends

const PORT = 3001;

app.get("/createStock", async (req, res) => {
    const { data, error } = await supabase.from("Stocks").insert(req.body);

    console.log(req.body);
    res.send(console.log(`stock added ${req.body.name}`));
  });
  
  

  app.listen(PORT, console.log(`listening on ${PORT}`));