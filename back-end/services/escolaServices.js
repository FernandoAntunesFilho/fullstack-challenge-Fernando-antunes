const { Escola, Diretore } = require("../models");
const escolaValidations = require("./escolaValidations");

const getEscolas = async () => {
  const escolas = await Escola.findAll({
    attributes: { exclude: ["diretorId"] },
    include: [{ model: Diretore, as: "diretor" }],
  });
  return escolas;
};

const addEscola = async (dadosNovaEscola) => {
  const { nome, diretorId } = dadosNovaEscola;

  if (
    (await escolaValidations.diretorIdIsValid(diretorId)) &&
    escolaValidations.nomeEscolaInformado(nome)
  ) {
    const novaEscola = await Escola.create({
      nome,
      diretorId,
    });
    return novaEscola;
  }
  return { message: "Dados inválidos para criar nova Escola", code: 400 };
};

const editEscola = async (dadosEscola) => {
  const { id, nome, diretorId } = dadosEscola;
  if (await escolaValidations.escolaIdIsValid(id)) {
    await Escola.update({ nome, diretorId }, { where: { id } });

    const escolaEditada = await Escola.findByPk(id);
    return escolaEditada;
  }
  return { message: "Escola informada não existe", code: 404 };
};

const deleteEscola = async (id) => {
  if (await escolaValidations.escolaIdIsValid(id)) {
    const escola = await Escola.destroy({
      where: {
        id,
      },
    });
    return escola;
  }
  return { message: "Escola informada não existe", code: 404 };
};

module.exports = {
  getEscolas,
  addEscola,
  editEscola,
  deleteEscola,
};
