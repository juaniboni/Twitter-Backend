const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

class User extends Model {
  static initModel(sequelize) {
    User.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        firstname: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        lastname: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        username: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            isEmail: true,
          },
        },
        bio: {
          type: DataTypes.TEXT,
        },
        profilePic: {
          type: DataTypes.STRING, // URL
        },

        //  tweets: {
        //    type: DataTypes.ARRAY(DataTypes.TEXT), // If storing tweet content directly in the user model
        //  }
      },
      {
        sequelize,
        modelName: "user",
        hooks: {
          beforeCreate: async (user, options) => {
            // Hash the password before saving it to the database
            const hashedPassword = await bcrypt.hash(user.password, 10);
            user.password = hashedPassword;
          },
        }, // Nombre del modelo en singular y en minúscula.
      },
    );
    return User;
  }
}

module.exports = User;
