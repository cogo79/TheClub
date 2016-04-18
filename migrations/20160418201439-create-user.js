'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
      username: {
        type:Sequelize.STRING,
        unique: true
      },
      password: Sequelize.STRING,
      email: {
        type: Sequelize.STRING,
        unique: true
      },
      firstName: Sequelize.STRING,
      lastName: Sequelize.STRING,
      phoneNr: Sequelize.INTEGER,
      mobilePhoneNr: Sequelize.INTEGER,
      workPhoneNr: Sequelize.INTEGER
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('users');
  }
};