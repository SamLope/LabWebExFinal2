const Joi = require("joi");

const createProduto = {
    payload: Joi.object({
        id: Joi.string().required(),
        nome: Joi.string().min(3).required(),
        descricao: Joi.string().optional(),
        categoria: Joi.string().optional(),
        marca: Joi.string().optional(),
        preco: Joi.number().required(),
        quantidadeEstoque: Joi.number().integer().required(),
        codigoBarras: Joi.string().optional(),
        dimensoes: Joi.object({
            altura: Joi.number().required(),
            largura: Joi.number().required(),
            profundidade: Joi.number().required(),
            unidadeMedida: Joi.string().valid('cm', 'm', 'mm').required(),
        }).optional(),
        peso: Joi.object({
            valor: Joi.number().required(),
            unidadeMedida: Joi.string().valid('kg', 'g').required(),
        }).optional(),
        status: Joi.string().valid('ativo', 'inativo').default('ativo'),
        dataCadastro: Joi.date().optional(),
    }),
};

const updateProduto = {
    payload: Joi.object({
        nome: Joi.string().min(3).optional(),
        descricao: Joi.string().optional(),
        categoria: Joi.string().optional(),
        marca: Joi.string().optional(),
        preco: Joi.number().optional(),
        quantidadeEstoque: Joi.number().integer().optional(),
        codigoBarras: Joi.string().optional(),
        dimensoes: Joi.object({
            altura: Joi.number().optional(),
            largura: Joi.number().optional(),
            profundidade: Joi.number().optional(),
            unidadeMedida: Joi.string().valid('cm', 'm', 'mm').optional(),
        }).optional(),
        peso: Joi.object({
            valor: Joi.number().optional(),
            unidadeMedida: Joi.string().valid('kg', 'g').optional(),
        }).optional(),
        status: Joi.string().valid('ativo', 'inativo').optional(),
        dataCadastro: Joi.date().optional(),
    }),
};

const consultaPorId = {
    params: Joi.object({
        id: Joi.string().required(),
    }),
};

const consultarProdutos = {
    query: Joi.object({
        nome: Joi.string().optional(),
        categoria: Joi.string().optional(),
        status: Joi.string().valid('ativo', 'inativo').default('ativo'),
    }),
};

module.exports = { createProduto, updateProduto, consultaPorId, consultarProdutos };
