import express from "express";
import { config } from "dotenv";
import { connect } from "mongoose";
import http from "http";

const app = express();
config()

const server = http.createServer(app);

server.listen({ port: 4000 }, () => {
    console.log("server iniciou")
})