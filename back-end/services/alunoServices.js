const { Aluno, Turma, Professore, sequelize } = require('../models');
const alunoValidations = require('./alunoValidations');

const getAlunosByTurma = async (turmaId) => {
  if (alunoValidations.turmaIdIsValid(turmaId)) {
    const alunos = Aluno.findAll({
      attributes: { exclude: ['turmaId', 'responsavel', 'email', 'celular', 'obs'] },
      where: {
        turmaId,
      },
      include: [
        {
          model: Turma, as: 'turma',
          attributes: { exclude: ['escolaId', 'professorId', 'obs'] },
          include: [{ model: Professore, as: 'professor' }]
        },
      ],
    });
    return alunos;
  }
  return { message: 'Id da Turma não foi informado', code: 400 };
};

const getAlunoById = async (alunoId) => {
  if (alunoValidations.alunoIdIsValid(alunoId)) {
    const aluno = await Aluno.findByPk(alunoId);
    if (alunoValidations.alunoIsNull(aluno)) {
      return { message: 'Aluno não foi encontrado com o Id informado', code: 404 }
    }
    return aluno;
  }
  return { message: 'Id do Aluno não foi informado', code: 400 };
};

const getAlunosByTerm = async (termo) => {
  const Sequelize = require('sequelize');
  const { Op } = Sequelize;

  const posts = await Aluno.findAll({
    where: { [Op.or]: [
      { nome: { [Op.like]: `%${termo}%` } },
      { responsavel: { [Op.like]: `%${termo}%` } },
      { email: { [Op.like]: `%${termo}%` } },
      { celular: { [Op.like]: `%${termo}%` } },
      { obs: { [Op.like]: `%${termo}%` } },
    ],
    },
  });
  return posts;
};

module.exports = {
  getAlunosByTurma,
  getAlunoById,
  getAlunosByTerm,
};