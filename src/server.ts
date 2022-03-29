import express, { json } from "express";
import { db } from "./database/db";
import { router } from "./routes";

const app = express();
app.use(json);
app.use(router);

const port = 3000;

app.listen(port, async () => {
  await db.sync();
  console.log(`${process.env.NOME_PROJETO} rodando na porta ${port}`);
});
