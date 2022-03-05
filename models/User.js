const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// Create a User model
class User extends Model {}

User.init({
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "user",
});

module.exports = User;
