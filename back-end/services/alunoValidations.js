const turmaIdIsValid = (turmaId) => {
  if (!turmaId) return false;
  return true;
};

const alunoIdIsValid = (alunoId) => {
  if (!alunoId) return false;
  return true;
};

const alunoIsNull = (aluno) => {
  if (!aluno) return true;
};

module.exports = {
  turmaIdIsValid,
  alunoIdIsValid,
  alunoIsNull,
};