const Produto = require('./produto-model');

// Criando um produto
const criarProduto = async (dadosProduto) => {
  const produto = await Produto.create(dadosProduto);
  return produto;
};

// Alterando dados de um produto
const alterarProduto = async (id, dadosProduto) => {
  const produto = await Produto.update(dadosProduto, { where: { id } });
  return produto;
};

// Excluindo um produto
const excluirProduto = async (id) => {
  await Produto.destroy({ where: { id } });
};

// Obtendo um produto por id
const obterProdutoPorId = async (id) => {
  const produto = await Produto.findByPk(id);
  return produto;
};

// Filtrando produtos
const filtrarProdutos = async (filtros) => {
  const produtos = await Produto.findAll({ where: filtros });
  return produtos;
};

module.exports = {
  criarProduto,
  alterarProduto,
  excluirProduto,
  obterProdutoPorId,
  filtrarProdutos
};
