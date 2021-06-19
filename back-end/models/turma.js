const turmaModel = (sequelize, DataTypes) => {
  const Turma = sequelize.define('Turma', {
    nome: DataTypes.STRING,
    professorId: DataTypes.INTEGER,
    escolaId: DataTypes.INTEGER,
  },
  { timestamps: false });

  Turma.associate = (models) => {
    Turma.belongsTo(models.Professore, { as: 'professor', foreignKey: 'professorId' });
    Turma.belongsTo(models.Escola, { as: 'escola', foreignKey: 'escolaId' });
  };

  return Turma;
};

module.exports = postModel;