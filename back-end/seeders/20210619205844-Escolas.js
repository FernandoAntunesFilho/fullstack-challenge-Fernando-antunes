module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
      "Escolas",
      [
        {
          id: 1,
          nome: "Escola Fairydust Raymond",
          diretorId: 2,
        },
        {
          id: 2,
          nome: "Escola Rachel Ball",
          diretorId: 1,
        },
      ],
      { timestamps: false }
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete("Escolas", null, {});
  },
};
