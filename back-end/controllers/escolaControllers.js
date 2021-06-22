const escolaServices = require('../services/escolaServices');

const getEscolas = async (req, res) => {
  const result = await escolaServices.getEscolas();
  res.status(200).json(result);
};

const addEscolas = async (req, res) => {
  const dadosNovaEscola = req.body;
  const result = await escolaServices.addEscolas(dadosNovaEscola);
  res.status(200).json(result);
};

module.exports = {
  getEscolas,
  addEscolas,
}