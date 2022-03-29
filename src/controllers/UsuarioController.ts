import { Request, Response } from "express";
import { UsuarioModel } from "../database/models/UsuarioModel";

class UsuarioController {
  async findAll(req: Request, res: Response) {}

  async findOne(req: Request, res: Response) {}

  async create(req: Request, res: Response) {
    const { email, nome, idade } = req.body;
    const usuario = await UsuarioModel.create({
      email,
      nome,
      idade,
    });
    return res.status(201).json(usuario);
  }

  async update(req: Request, res: Response) {}

  async destroy(req: Request, res: Response) {}
}

export default new UsuarioController();
