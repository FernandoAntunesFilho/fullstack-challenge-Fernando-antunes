module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Turmas',
      [{
        id: 1,
        nome: '5 Ano',
        professorId: 2,
      },
      {
        id: 2,
        nome: '6 Ano',
        professorId: 3,
      },
      {
        id: 3,
        nome: '7 ano',
        professorId: 1,
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Turmas', null, {});
  },
};
