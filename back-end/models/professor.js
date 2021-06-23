const professorModel = (sequelize, DataTypes) => {
  const Professor = sequelize.define(
    "Professore",
    {
      nome: DataTypes.STRING,
    },
    { timestamps: false }
  );

  return Professor;
};

module.exports = professorModel;
