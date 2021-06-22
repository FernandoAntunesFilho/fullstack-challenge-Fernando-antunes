const escolaServices = require('../services/escolaServices');

const getEscolas = async (req, res) => {
  const result = await escolaServices.getEscolas();
  res.status(200).json(result);
};

const addEscolas = async (req, res) => {
  const dadosNovaEscola = req.body;
  const result = await escolaServices.addEscolas(dadosNovaEscola);
  if (result.message) {
    return res.status(result.code).json({ message: result.message });
  }
  res.status(200).json(result);
};

module.exports = {
  getEscolas,
  addEscolas,
}