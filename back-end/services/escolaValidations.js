const { Diretore, Escola } = require("../models");

const diretorIdIsValid = async (diretorId) => {
  const diretor = await Diretore.findByPk(diretorId);
  if (diretor) return true;
  return false;
};

const nomeEscolaInformado = (nomeEscola) => {
  if (!nomeEscola) return false;
  return true;
};

const escolaIdIsValid = async (id) => {
  const escola = await Escola.findByPk(id);
  if (escola) return true;
  return false;
};

module.exports = {
  diretorIdIsValid,
  nomeEscolaInformado,
  escolaIdIsValid,
};
