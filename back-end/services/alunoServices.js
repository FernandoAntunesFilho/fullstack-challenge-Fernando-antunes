const { Aluno, Turma, Professore } = require('../models');

const getAlunosByTurma = async (turmaId) => {
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
};

const getAlunoById = async (alunoId) => {
  const aluno = Aluno.findByPk(alunoId);
  return aluno;
};

module.exports = {
  getAlunosByTurma,
  getAlunoById,
};