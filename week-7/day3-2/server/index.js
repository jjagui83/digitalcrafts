const Sequelize = require("sequelize");
const { todo } = require("./models");

const express = require("express");
const app = express();

const cors = require("cors")
// const es6Renderer = require("express-es6-template-engine");
// app.engine('html', es6Renderer);
// app.set('views', 'templates')
// app.set('view engine', 'html')

const PORT = 3011;

// Middleware
app.use(express.json());
app.use(cors());
// ********

// Route to create data for the database
app.post("/create_users", async (req, res) => {
    const { firstName, lastName, task } = req.body;
  
    const newUser = await todo.create({
      firstName: firstName,
      lastName: lastName,
      task: task,
    });
    res.send(`Inserted New user with ${newUser.firstName} ${newUser.id}`);
  });
// ********

// Route to read database

app.post("/get_list", async (req,res) => {
  const list = await todo.findAll();
  res.send(list); 
});

// Route to update database
app.post("/update_task/:id", async (req,res) => {
  const task = await todo.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  res.send(task);
});

// Route to Delete data from database


app.post("/delete_user/:id", async (req,res) => {
  const user = await todo.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.send("Deleted");
});























app.listen(PORT, console.log(`Listening on port ${PORT}`));