const ProdutoBusiness = require('./produto-business');

const criarProduto = async (req, res) => {
    try{
        const produto = await ProdutoBusiness.criarProduto(req.payload);
        return res.response(produto).code(201);
    } catch (error) {
        return res.response({ error: error.message }).code(400);
    }
};

const alterarProduto = async (req, res) => {
    try{
        const produto = await ProdutoBusiness.alterarProduto(req.params.id, req.payload);
        return res.response(produto).code(200);
    } catch (error) {
        return res.response({ error: error.message }).code(400);
    }
};

const excluirProduto = async (req, res) => {
    try{
        await ProdutoBusiness.excluirProduto(req.params.id);
        return res.response().code(204);
    } catch (error) {
        return res.response({ error: error.message }).code(400);
  }
};

const obterProdutoPorId = async (req, res) => {
    try{
        const produto = await ProdutoBusiness.obterProdutoPorId(req.params.id);
        return res.response(produto).code(200);
    } catch (error) {
        return res.response({ error: 'Produto não encontrado' }).code(404);
  }
};

const filtrarProdutos = async (req, res) => {
    try {
      const filtros = req.query;
      const produtos = await ProdutoBusiness.filtrarProdutos(filtros);
      return res.response(produtos).code(200);
    } catch (error) {
      return res.response({ error: error.message }).code(400);
    }
  };

  module.exports = {
    criarProduto,
    alterarProduto,
    excluirProduto,
    obterProdutoPorId,
    filtrarProdutos
  };
