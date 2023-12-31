const { Model, DataTypes } = require("sequelize");

class Tweet extends Model {
  static initModel(sequelize) {
    Tweet.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        content: {
          type: DataTypes.TEXT(),
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "tweet", // Nombre del modelo en singular y en minúscula.
      },
    );

    return Tweet;
  }
}

module.exports = Tweet;
