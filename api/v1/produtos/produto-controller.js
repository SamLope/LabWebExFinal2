const produtoBusiness = require("./produto-business");

const getProdutos = async (request, h) => {
    const result = await produtoBusiness.list(request.query);
    return result;
};

const produtoPorId = async (request, h) => {
    const idProduto = request.params.id;
    const produtoProcurado = await produtoBusiness.list({ id: idProduto });
    if (produtoProcurado && produtoProcurado.length > 0) {
        return h.response(produtoProcurado[0]).code(200);
    }
    return h.response().code(404);
};

const createProduto = async (request, h) => {
    const result = await produtoBusiness.save(request.payload);
    return h.response(result).code(201);
};

const updateProduto = async (request, h) => {
    const idProduto = request.params.id;
    const produtoAtualizado = await produtoBusiness.update(idProduto, request.payload);
    if (produtoAtualizado) {
        return h.response(produtoAtualizado).code(200);
    }
    return h.response().code(404);
};

const deleteProduto = async (request, h) => {
    const idProduto = request.params.id;
    const produtoRemovido = await produtoBusiness.remove(idProduto);
    if (produtoRemovido) {
        return h.response().code(204);  
    }
    return h.response().code(404);
};

module.exports = { getProdutos, createProduto, produtoPorId, updateProduto, deleteProduto };
