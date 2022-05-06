import express from "express";
import UsuarioController from "./controllers/UsuarioController";

const router = express.Router();

// Criar um usuário no banco
router.post("/usuarios", UsuarioController.create);

// Listar um usuário no banco
router.get("/usuarios", UsuarioController.findAll);

// Listar um usuário no banco pelo ID
router.get("/usuarios/:usuarioId", UsuarioController.findOne);

// Atualizar um usuário no banco
router.put("/usuarios/:usuarioId", UsuarioController.update);

// Excluir um usuário no banco
router.delete("/usuarios/:usuarioId", UsuarioController.destroy);

export { router };
