import { Request, Response } from "express";
import { UsuarioModel } from "../models/UsuarioModel";
import bcrypt from "bcryptjs";

class UsuarioController {
  login = async (req: Request, res: Response) => {
    const usuario = await UsuarioModel.findOne({
      attributes: [],
      where: {
        email: req.body.email,
      },
    });
    if (usuario === null) {
      return res.status(400).json({
        error: true,
        mensagem: "Erro ao efetuar login",
      });
    }
    if (!(await bcrypt.compare(req.body.email, req.body.senha))) {
      return res.status(400).json({
        error: true,
        mensagem: "senha inválida",
      });
    }
    return res.json({
      error: false,
      mensagem: "Usuário Logado com sucesso",
    });
  };
}

export default new UsuarioController();
