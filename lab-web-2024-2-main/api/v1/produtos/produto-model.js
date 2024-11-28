const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../config/db').sequelize; 

const Produto = sequelize.define('Produto', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: true
  },
  categoria: {
    type: DataTypes.STRING,
    allowNull: true
  },
  marca: {
    type: DataTypes.STRING,
    allowNull: true
  },
  preco: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  quantidadeEstoque: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  codigoBarras: {
    type: DataTypes.STRING,
    allowNull: true
  },
  dimensoes: {
    type: DataTypes.JSONB,
    allowNull: true
  },
  peso: {
    type: DataTypes.JSONB,
    allowNull: true
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dataCadastro: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  timestamps: false 
});

module.exports = Produto;