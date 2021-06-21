module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Turmas',
      [{
        id: 1,
        nome: '5 Ano',
        professorId: 2,
        escolaId: 1,
      },
      {
        id: 2,
        nome: '6 Ano',
        obs: 'Turma em semana de provas',
        professorId: 3,
        escolaId: 1,
      },
      {
        id: 3,
        nome: '7 ano',
        professorId: 1,
        escolaId: 2,
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Turmas', null, {});
  },
};
