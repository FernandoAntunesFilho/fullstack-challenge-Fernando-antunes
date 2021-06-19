const alunoModel = (sequelize, DataTypes) => {
  const Aluno = sequelize.define('Aluno', {
    nome: DataTypes.STRING,
    responsavel: DataTypes.STRING,
    email: DataTypes.STRING,
    celular: DataTypes.STRING,
    turmaId: DataTypes.INTEGER,
  },
  { timestamps: false });

  Aluno.associate = (models) => {
    Aluno.belongsTo(models.Turma, { as: 'turma', foreignKey: 'turmaId' });
  };

  return Aluno;
};

module.exports = postModel;