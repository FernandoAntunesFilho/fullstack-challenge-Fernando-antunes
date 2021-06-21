const alunoServices = require('../services/alunoServices');

const getAlunosByTurma = async (req, res) => {
  const { turmaId } = req.body;
  const result = await alunoServices.getAlunosByTurma(turmaId);
  if (result.message) {
    return res.status(result.code).json({ message: result.message });
  }
  res.status(200).json(result);
};

const getAlunoById = async (req, res) => {
  const { alunoId } = req.body;
  const result = await alunoServices.getAlunoById(alunoId);
  if (result.message) {
    return res.status(result.code).json({ message: result.message });
  }
  res.status(200).json(result);
};

module.exports = {
  getAlunosByTurma,
  getAlunoById,
}