const escolaServices = require('../services/escolaServices');

const getEscolas = async (req, res) => {
  const result = await escolaServices.getEscolas();
  res.status(200).json(result);
};

const addEscola = async (req, res) => {
  const dadosNovaEscola = req.body;
  const result = await escolaServices.addEscola(dadosNovaEscola);
  if (result.message) {
    return res.status(result.code).json({ message: result.message });
  }
  res.status(201).json(result);
};

const editEscola = async (req, res) => {
  const dadosEscola = req.body;
  const result = await escolaServices.editEscola(dadosEscola);
  if (result.message) {
    return res.status(result.code).json({ message: result.message });
  }
  res.status(200).json(result);
};

const deleteEscola = async (req, res) => {
  const { id } = req.body;
  const result = await escolaServices.deleteEscola(id);
  if (result.message) {
    return res.status(result.code).json({ message: result.message });
  }
  res.status(204).json();
}

module.exports = {
  getEscolas,
  addEscola,
  editEscola,
  deleteEscola,
}