const Joi = require("joi");
const produtoController = require("./produto-controller");
const produtoSchema = require("./produto-schema");

const routes = [
    {
        method: "POST",
        path: "/produtos",
        handler: produtoController.createProduto,
        options: {
            validate: produtoSchema.createProduto
        }
    },
    {
        method: "PUT",
        path: "/produtos/{id}",
        handler: produtoController.updateProduto,
        options: {
            validate: produtoSchema.updateProduto
        }
    },
    {
        method: "DELETE",
        path: "/produtos/{id}",
        handler: produtoController.deleteProduto,
        options: {
            validate: produtoSchema.deleteProduto
        }
    },
    {
        method: "GET",
        path: "/produtos/{id}",
        handler: produtoController.getProdutoById,
        options: {
            validate: produtoSchema.consultaProdutoPorId
        }
    },
    {
        method: "GET",
        path: "/produtos",
        handler: produtoController.getProdutos,
        options: {
            validate: produtoSchema.consultarProdutos
        }
    }
];

module.exports = routes;
