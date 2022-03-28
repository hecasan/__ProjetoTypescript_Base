import express from "express";

const app = express();

const port = 3000;

app.listen(port, () => {
  console.log(`${process.env.NOME_PROJETO} rodando na porta ${port}`);
});
