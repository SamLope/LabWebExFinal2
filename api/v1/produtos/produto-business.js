const produtoModel = require('./produto-model');


const save = async (produto) => {
    const saved = await produtoModel.Produto.create(produto);
    return saved;
};


const list = async (filters) => {
    return await produtoModel.Produto.findAll({ where: filters });
};


const update = async (id, produto) => {
    const produtoExistente = await produtoModel.Produto.findByPk(id);
    if (produtoExistente) {
        return await produtoExistente.update(produto);
    }
    return null;  
};


const remove = async (id) => {
    const produtoExistente = await produtoModel.Produto.findByPk(id);
    if (produtoExistente) {
        return await produtoExistente.update({ status: 'inativo' });
    }
    return null;  
};

module.exports = { save, list, update, remove };
