const diretorModel = (sequelize, DataTypes) => {
  const Diretor = sequelize.define('Diretor', {
    nome: DataTypes.STRING,
  },
  { timestamps: false });

  return Diretor;
};

module.exports = userModel;