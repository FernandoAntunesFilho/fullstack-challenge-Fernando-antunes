const turmaIdIsValid = (turmaId) => {
  if (!turmaId) return false;
  return true;
};

module.exports = {
  turmaIdIsValid,
};