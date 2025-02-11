const escolaModel = (sequelize, DataTypes) => {
  const Escola = sequelize.define(
    "Escola",
    {
      nome: DataTypes.STRING,
      diretorId: DataTypes.INTEGER,
    },
    { timestamps: false }
  );

  Escola.associate = (models) => {
    Escola.belongsTo(models.Diretore, {
      as: "diretor",
      foreignKey: "diretorId",
    });
  };

  return Escola;
};

module.exports = escolaModel;
