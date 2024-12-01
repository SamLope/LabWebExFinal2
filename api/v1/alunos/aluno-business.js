const listaAlunos = [];
const alunoModel = require('./aluno-model');

const save = async (aluno) => {
    
    const saved = await alunoModel.Aluno.create(aluno);

    return aluno;
}


const list = async (filters) => {
    const where = {};
    if (filters.nome) {
        where.nome = { [Sequelize.Op.like]: `%${filters.nome}%` };
    }
    if (filters.idade) {
        where.idade = filters.idade;
    }
    return await alunoModel.Aluno.findAll({ where });
}

const findById = async (id) => {
    return await alunoModel.Aluno.findOne({ where: { id } });
}

module.exports = { save, list, findById };

