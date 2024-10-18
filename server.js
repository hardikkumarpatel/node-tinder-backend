import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import collection from "./dbConfig.js";
// App Config
const app = express();
const port = process.env.port || 9002;
const mongo_connection_url = "";
// Middleware
app.use(cors());
app.use(express.json());

//DB Config
mongoose.connect(mongo_connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// API endpoints
app.get('/', (req, res) => {
    res.status(200).send("Welcome To Tinder BackEnd");
})

app.post('/tinder/card', (req, res) => {
    const postReq = req.body;
    collection.create(postReq, (error, data) => {
        if (error) {
          res.status(500).send(error);
        } else {
          res.status(201).send(data);
        }
      });
})

app.get("/tinder/card", (req, res) => {
    collection.find((error, data) => {
      if (error) {
        res.status(500).send(error);
      } else {
        res.status(200).send(data);
      }
    });
  });
  
//Listners
app.listen(port, () => {
    console.log(`Tinder Backend Running on Port ${port}`);
})

