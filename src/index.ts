import express from "express";
import { config } from "dotenv";
import { connect } from "mongoose";
import http from "http";
import cors from "cors"
import { Options } from "./config/cors";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(Options));
config();

const server = http.createServer(app);

const port = process.env.PORT || 4001;
const user = process.env.DB_USER;
const  password = process.env.DB_PASS;

connect(`mongodb+srv://${ user }:${ password }@cluster0.b1dvuqr.mongodb.net`)
.then(()=>{
  server.listen(port, () => {
    console.log("server iniciou")
  });
}).catch(err => console.log(err));

