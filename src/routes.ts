import express from "express";

const router = express.Router();

// Criar um usuário no banco
router.post("/usuarios", async (req, res) => {});

// Listar um usuário no banco
router.get("/usuarios", async (req, res) => {});

// Listar um usuário no banco pelo ID
router.get("/usuarios/usuarioId", async (req, res) => {});

// Atualizar um usuário no banco
router.put("/usuarios/usuarioId", async (req, res) => {});

// Excluir um usuário no banco
router.delete("/usuarios/usuarioId", async (req, res) => {});

export { router };
