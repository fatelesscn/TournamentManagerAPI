module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Rounds', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    round: {
      type: Sequelize.INTEGER,
    },
    playFormat: {
      type: Sequelize.STRING,
    },
    date: {
      type: Sequelize.DATE,
    },
    teamFormat: {
      type: Sequelize.BOOLEAN,
    },
    eventId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Events',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      unique: 'EventPlayer',
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: queryInterface => queryInterface.dropTable('Rounds'),
};
