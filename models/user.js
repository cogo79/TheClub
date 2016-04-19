"use strict";

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    passwordHint: DataTypes.STRING,
    email: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phoneNr: DataTypes.INTEGER,
    mobilePhoneNr: DataTypes.INTEGER,
    workPhoneNr: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // User.hasMany(blablabla ;D )
      }
    }
  });

  return User;
};