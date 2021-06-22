const { Escola, Diretore } = require('../models');
const escolaValidations = require('./escolaValidations');

const getEscolas = async () => {
  const escolas = await Escola.findAll({
    attributes: { exclude: ['diretorId'] },
    include: [
      { model: Diretore, as: 'diretor' },
    ],
  });
  return escolas;
};

const addEscolas = async (dadosNovaEscola) => {
  const { nome, diretorId } = dadosNovaEscola;
    
  if (await escolaValidations.diretorIdIsValid(diretorId)) {
    const novaEscola = await Escola.create({
      nome,
      diretorId,
    });
    return novaEscola;
  }
  return { message: 'Dados inválidos para criar nova Escola', code: 400 }
};

module.exports = {
  getEscolas,
  addEscolas,
}