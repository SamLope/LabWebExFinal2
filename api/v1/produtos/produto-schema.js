const Joi = require("joi");

const createProduto = {
    payload: Joi.object({
        nome: Joi.string().min(3).max(100).required(),
        descricao: Joi.string().min(5).max(255).required(),
        categoria: Joi.string().min(3).max(50).required(),
        marca: Joi.string().min(3).max(100).required(),
        preco: Joi.object({
            custo: Joi.number().precision(2).required(),
            venda: Joi.number().precision(2).required(),
        }).required(),
        quantidadeEstoque: Joi.number().integer().min(0).required(),
        codigoBarras: Joi.string().length(13).required(),
        dimensoes: Joi.object({
            altura: Joi.number().precision(2).required(),
            largura: Joi.number().precision(2).required(),
            profundidade: Joi.number().precision(2).required(),
            unidadeMedida: Joi.string().valid("cm", "m", "mm").required(),
        }).required(),
        peso: Joi.object({
            valor: Joi.number().precision(2).required(),
            unidadeMedida: Joi.string().valid("kg", "g").required(),
        }).required(),
        status: Joi.string().valid("ativo", "inativo").default("ativo"),
        dataCadastro: Joi.date().iso().required(),
    })
};


const updateProduto = {
    payload: Joi.object({
        nome: Joi.string().min(3).max(100),
        descricao: Joi.string().min(5).max(255),
        categoria: Joi.string().min(3).max(50),
        marca: Joi.string().min(3).max(100),
        preco: Joi.object({
            custo: Joi.number().precision(2),
            venda: Joi.number().precision(2),
        }),
        quantidadeEstoque: Joi.number().integer().min(0),
        codigoBarras: Joi.string().length(13),
        dimensoes: Joi.object({
            altura: Joi.number().precision(2),
            largura: Joi.number().precision(2),
            profundidade: Joi.number().precision(2),
            unidadeMedida: Joi.string().valid("cm", "m", "mm"),
        }),
        peso: Joi.object({
            valor: Joi.number().precision(2),
            unidadeMedida: Joi.string().valid("kg", "g"),
        }),
        status: Joi.string().valid("ativo", "inativo"),
        dataCadastro: Joi.date().iso(),
    })
};


const deleteProduto = {
    params: Joi.object({
        id: Joi.number().integer().positive().required(),
    })
};


const consultaProdutoPorId = {
    params: Joi.object({
        id: Joi.number().integer().positive().required(),
    })
};


const consultarProdutos = {
    query: Joi.object({
        categoria: Joi.string().min(3).max(50),
        nome: Joi.string().min(3).max(100),
        status: Joi.string().valid('ativo', 'inativo'),
    })
};

module.exports = {
    createProduto,
    updateProduto,
    deleteProduto,
    consultaProdutoPorId,
    consultarProdutos
};
