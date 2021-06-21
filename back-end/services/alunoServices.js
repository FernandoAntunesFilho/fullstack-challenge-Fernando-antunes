const { Aluno, Turma, Professore } = require('../models');
const alunoValidations = require('./alunoValidations');

const getAlunosByTurma = async (turmaId) => {
  if (alunoValidations.turmaIdIsValid(turmaId)) {
    const alunos = Aluno.findAll({
      attributes: { exclude: ['turmaId'] },
      where: {
        turmaId,
      },
      include: [
        {
          model: Turma, as: 'turma',
          attributes: { exclude: ['escolaId', 'professorId'] },
          include: [{ model: Professore, as: 'professor' }]
        },
      ],
    });
    return alunos;
  }
  return { message: 'Id da Turma não foi informado', code: 400 }
};

const getAlunoById = async (alunoId) => {
  const aluno = Aluno.findByPk(alunoId);
  return aluno;
};

module.exports = {
  getAlunosByTurma,
  getAlunoById,
};