const { Diretore } = require('../models');

const diretorIdIsValid = async (diretorId) => {
  const diretor = await Diretore.findByPk(diretorId);
  if (diretor) return true;
  return false;
};

const nomeEscolaInformado = (nomeEscola) => {
  console.log(nomeEscola)
  if (!nomeEscola) return false;
  return true;
}

module.exports = {
  diretorIdIsValid,
  nomeEscolaInformado,
};