const alunoServices = require('../services/alunoServices');

const getAlunosByTurma = async (req, res) => {
  const { turmaId } = req.body;
  const result = await alunoServices.getAlunosByTurma(turmaId);
  res.status(200).json(result);
};

const getAlunoById = async (req, res) => {
  const { alunoId } = req.body;
  const result = await alunoServices.getAlunoById(alunoId);
  res.status(200).json(result);
};

module.exports = {
  getAlunosByTurma,
  getAlunoById,
}