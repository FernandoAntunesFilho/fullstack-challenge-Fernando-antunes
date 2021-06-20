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

module.exports = {
  getEscolas,
}