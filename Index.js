const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
const app = express();
app.use(cors());

//-------------------------------------------------------------------------------------//
//connect MongoDB
//-------------------------------------------------------------------------------------//
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://todo-list:1uzLnQAWe1HeqhcM@cluster0.xm57s.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    await client.connect();
    const todoList = client.db("todoList").collection("todo");

    /*-------------------------------- POST REVIEW ---------------------------------------*/
    app.post("/todoList", async (req, res) => {
      const todoList = req.body;
      const result = await todoList.insertOne(todoList);
      res.send(result);
    });
  } finally {
  }
}
//-------------------------------------------------------------------------------------//
//  FUNCTION CALL
//-------------------------------------------------------------------------------------//

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send(`<h1>HELLO ANDROGAME SERVER WORLD!!!!!</h1>`);
});

app.listen(port, () => {
  console.log("listening on port", port);
});
