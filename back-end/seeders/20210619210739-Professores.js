module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
      "Professores",
      [
        {
          id: 1,
          nome: "prof Lee Bob",
        },
        {
          id: 2,
          nome: "prof Karan Hendricks",
        },
        {
          id: 3,
          nome: "prof Dave Seymour",
        },
      ],
      { timestamps: false }
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete("Professores", null, {});
  },
};
