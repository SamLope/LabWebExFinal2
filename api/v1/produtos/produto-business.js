const produtoModel = require('./produto-model');


const save = async (produto) => {
    const saved = await produtoModel.Produto.create(produto);
    return saved;
};


const list = async (filters) => {
    
    const whereConditions = {};

    if (filters.nome) {
        whereConditions.nome = {
            [Sequelize.Op.like]: `%${filters.nome}%`
        };
    }

    if (filters.categoria) {
        whereConditions.categoria = filters.categoria;
    }

    if (filters.status) {
        whereConditions.status = filters.status;
    }

    
    return await produtoModel.Produto.findAll({
        where: whereConditions,
    });
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
        // Atualizando o status do produto para "inativo"
        return await produtoExistente.update({ status: 'inativo' });
    }
    return null;  
};

const findById = async (id) => {
    return await produtoModel.Produto.findByPk(id);
};

module.exports = { save, list, update, remove, findById };
