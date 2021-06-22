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

const addEscola = async (dadosNovaEscola) => {
  const { nome, diretorId } = dadosNovaEscola;
    
  if (await escolaValidations.diretorIdIsValid(diretorId)
  && escolaValidations.nomeEscolaInformado(nome)) {
    const novaEscola = await Escola.create({
      nome,
      diretorId,
    });
    return novaEscola;
  }
  return { message: 'Dados inválidos para criar nova Escola', code: 400 }
};

const editEscola = async (dadosEscola) => {
  // ENCONTRAR UMA FORMA DE NÃO EDITAR O ID DO DIRETOR CASO NÃO EXISTA NA TABELA DIRETORES
  const { id, nome, diretorId } = dadosEscola;
  if (await escolaValidations.escolaIdIsValid(id)) {
    const escolaEditada = await Escola.update(
      { nome, diretorId },
      { where: { id } }
      );
    return escolaEditada;
  }
  return { message: 'Escola informada não existe', code: 404 }
};

module.exports = {
  getEscolas,
  addEscola,
  editEscola,
}