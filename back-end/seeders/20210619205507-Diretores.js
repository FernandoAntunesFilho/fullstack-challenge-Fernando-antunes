module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
      "Diretores",
      [
        {
          id: 1,
          nome: "Judy Acevedo",
        },
        {
          id: 2,
          nome: "Felix Sawyer",
        },
      ],
      { timestamps: false }
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete("Diretores", null, {});
  },
};
