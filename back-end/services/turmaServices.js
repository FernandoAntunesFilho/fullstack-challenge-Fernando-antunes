const { Turma, Professore, Escola } = require('../models');
const turmaValidations = require('./turmaValidations');

const getTurmasByEscola = async (escolaId) => {
  if (turmaValidations.escolaIdIsValid(escolaId)) {
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
  }
  return { message: 'Id da Escola é obrigatório', code: 400 }
};

module.exports = {
  getTurmasByEscola,
};