const diretorModel = (sequelize, DataTypes) => {
  const Diretor = sequelize.define(
    "Diretore",
    {
      nome: DataTypes.STRING,
    },
    { timestamps: false }
  );

  return Diretor;
};

module.exports = diretorModel;
