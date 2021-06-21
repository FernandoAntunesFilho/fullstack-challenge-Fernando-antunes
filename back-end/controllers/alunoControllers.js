const alunoServices = require('../services/alunoServices');

const getAlunosByTurma = async (req, res) => {
  const { turmaId } = req.body;
  const result = await alunoServices.getAlunosByTurma(turmaId);
  res.status(200).json(result);
};

module.exports = {
  getAlunosByTurma,
}