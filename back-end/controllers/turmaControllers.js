const turmaServices = require('../services/turmaServices');

const getTurmasByEscola = async (req, res) => {
  const { escolaId } = req.body;
  const result = await turmaServices.getTurmasByEscola(escolaId);
  res.status(200).json(result);
};

module.exports = {
  getTurmasByEscola,
};