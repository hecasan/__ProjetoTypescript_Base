import express, { json } from "express";
import { db } from "./database/db";
import { router } from "./routes/routes";

const app = express();
app.use(json());
app.use(router);
const port = process.env.DATABASE_PORT;

app.listen(`${port}`, async () => {
  await db.sync();
  console.log(
    `Projeto ${process.env.NOME_PROJETO} rodando em http://${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}`
  );
});
