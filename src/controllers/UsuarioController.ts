import { Request, Response } from "express";
import { UsuarioModel } from "../models/UsuarioModel";
import bcrypt from "bcryptjs";

class UsuarioController {
  create = async (req: Request, res: Response) => {
    const dados = req.body;
    dados.senha = await bcrypt.hash(dados.senha, 8);

    UsuarioModel.create(dados)
      .then((usuario) => {
        res.status(200).json(usuario);
      })
      .catch((errors) => {
        res.status(500).json({ errors: errors.errors });
      });
  };

  findAll = (req: Request, res: Response) => {
    UsuarioModel.findAll(req.body)
      .then((usuarios) => {
        res.status(200).json(usuarios);
      })
      .catch((errors) => {
        res.status(500).json({ errors: errors.errors });
      });
  };

  async findOne(req: Request, res: Response) {
    const { usuarioId } = req.params;
    const usuario = await UsuarioModel.findOne({
      where: {
        id: usuarioId,
      },
    });
    return usuario
      ? res.status(200).json(usuario)
      : res.status(404).send("Usuário não encontrado!");
  }

  async update(req: Request, res: Response) {
    const { usuarioId } = req.params;
    const usuario = await UsuarioModel.update(req.body, {
      where: {
        id: usuarioId,
      },
    });
    return usuario
      ? res.status(200).json({
          msg: `Usuário  do id ${usuarioId} atualizado com sucesso`,
        })
      : res.status(404).send("Usuário não encontrado!");
  }

  async destroy(req: Request, res: Response) {
    const { usuarioId } = req.params;
    const usuario = await UsuarioModel.destroy({
      where: {
        id: usuarioId,
      },
    });
    return usuario
      ? res.status(200).send("Usuário excluído com sucesso")
      : res.status(404).send("Usuário não encontrado!");
  }
}

export default new UsuarioController();
