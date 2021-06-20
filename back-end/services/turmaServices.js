const { Turma, Professore, Escola } = require('../models');

const getTurmasByEscola = async (escolaId) => {
  const turmas = Turma.findAll({
    attributes: { exclude: ['professorId', 'escolaId'] },
    where: {
      escolaId,
    },
    include: [
      { model: Professore, as: 'professor' },
      { model: Escola, as: 'escola', attributes: { exclude: ['diretorId'] }, },
    ],
  });
  return turmas;
};

module.exports = {
  getTurmasByEscola,
};