module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Alunos',
      [{
        id: 1,
        nome: 'Khadeejah Mack',
        responsavel: 'Paisley Harding',
        email: 'paisley-harding@scholl.com',
        celular: '3182906475',
        obs: 'O aluno já entregou todos os trabalhos',
        turmaId: 3,
      },
      {
        id: 2,
        nome: 'Eddie Huang',
        responsavel: 'Jorja Hood',
        email: 'jorja-hood@scholl.com',
        celular: '2053879416',
        turmaId: 3,
      },
      {
        id: 3,
        nome: 'Tobias Marsden',
        responsavel: 'Sheikh Webber',
        email: 'tobias-marsden@scholl.com',
        celular: '9023168457',
        turmaId: 2,
      },
      {
        id: 4,
        nome: 'Blaine Pearson',
        responsavel: 'Benny Gates',
        email: 'benny-gates@scholl.com',
        celular: '4835970612',
        turmaId: 2,
      },
      {
        id: 5,
        nome: 'Timur Davison',
        responsavel: 'Stewart Riddle',
        email: 'timur-davison@scholl.com',
        celular: '7804695231',
        turmaId: 1,
      },
      {
        id: 6,
        nome: 'Rikesh Jimenez',
        responsavel: 'Omari Gaines',
        email: 'omari-gaines@scholl.com',
        celular: '9513678402',
        turmaId: 1,
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Alunos', null, {});
  },
};
