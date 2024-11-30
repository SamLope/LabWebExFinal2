const Sequelize = require('sequelize');
const database = require('../../../config/db');

const Produto = database.sequelize.define('Produto', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    categoria: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    marca: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    preco: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    quantidadeEstoque: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    codigoBarras: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    dimensoes: {
        type: Sequelize.JSONB,
        allowNull: true,
    },
    peso: {
        type: Sequelize.JSONB,
        allowNull: true,
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'ativo',
    },
    dataCadastro: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: Sequelize.NOW,
    },
}, {
    tableName: 'produto',
    timestamps: false,  
});

module.exports = { Produto };
