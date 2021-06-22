const { Diretore } = require('../models');

const diretorIdIsValid = async (diretorId) => {
  const diretor = await Diretore.findByPk(diretorId);
  if (diretor) return true;
  return false;
};

module.exports = {
  diretorIdIsValid,
};