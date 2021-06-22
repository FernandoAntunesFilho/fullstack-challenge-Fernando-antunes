const { Escola, Diretore } = require('../models');

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
  const novaEscola = await Escola.create({
    nome,
    diretorId,
  });
  return novaEscola;
};

module.exports = {
  getEscolas,
  addEscolas,
}