import express from "express";
import { config } from "dotenv";
import { connect } from "mongoose";
import http from "http";
import cors from "cors";
import { Options } from "./config/cors";
import routes from "./routes/routes";

// Carregar variáveis de ambiente
config();

// Inicializar o aplicativo Express
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(Options));
app.use(routes);

// Criar o servidor HTTP
const server = http.createServer(app);

// Porta do servidor
const port = process.env.PORT || 4001;

// Conexão com o MongoDB
const user = process.env.DB_USER;
const password = process.env.DB_PASS;
const database = process.env.DB_NAME;
const mongoUri = `mongodb+srv://${user}:${password}@cluster0.b1dvuqr.mongodb.net/${database}`;

connect(mongoUri)
  .then(() => {
    server.listen(port, () => {
      console.log("Servidor iniciou na porta", port);
    });
  })
  .catch((err) => {
    console.error("Erro ao conectar ao MongoDB:", err);
  });
