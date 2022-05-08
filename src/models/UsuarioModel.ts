import { DataTypes } from "sequelize";
import { db } from "../database/db";

export const UsuarioModel = db.define(
  "usuario",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: "Por favor informe um e-mail válido",
        },
        len: {
          args: [4, 70],
          msg: "Esse campo precisa ter entre 4 e 70 caracteres",
        },
      },
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: {
          args: [4, 100],
          msg: "Esse campo precisa ter entre 4 e 100 caracteres",
        },
      },
    },
    idade: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    indexes: [
      {
        fields: ["email"],
        unique: true,
      },
    ],
  }
);
