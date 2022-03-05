const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// Create a User model
class User extends Model {}

User.init({
    
     id: {
        DataTypes.INTEGER,
     allowNull: false,
     primaryKey: true,
     autoIncrement: true   
     },  

    username: {
        type: DataTypes.STRING,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        uniquie: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [4]
        }
    }
},  
    
    
    
    {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "user",
});

module.exports = User;
