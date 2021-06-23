"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Alunos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nome: {
        type: Sequelize.STRING,
      },
      responsavel: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      celular: {
        type: Sequelize.STRING,
      },
      obs: {
        type: Sequelize.TEXT,
      },
      turmaId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: {
          model: "Turmas",
          key: "id",
        },
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Alunos");
  },
};
