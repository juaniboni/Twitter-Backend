const { Sequelize } = require("sequelize");


const sequelize = new Sequelize(
  process.env.DB_DATABASE, // Ej: hack_academy_db
  process.env.DB_USERNAME, // Ej: root
  process.env.DB_PASSWORD, // Ej: root
  {
    host: process.env.DB_HOST, // Ej: 127.0.0.1
    dialect: process.env.DB_CONNECTION, // Ej: mysql
    logging: false, // Para que no aparezcan mensajes en consola.
  },
);

// Requerir todos los modelos:
const User = require("./User");
const Tweet = require("./Tweet");
const Like = require("./Like");

// Inicializar todos los modelos:
User.initModel(sequelize);
Tweet.initModel(sequelize);
Like.initModel(sequelize);

/**
 * Luego de definir los modelos, se pueden establecer relaciones entre los
 * mismos (usando métodos como belongsTo, hasMany y belongsToMany)...
 *
 *
 *
 * Por ejemplo, si un User está relacionado con un Article, establecerlo
 * aquí abajo.
 */

 User.hasMany(Tweet);
 Tweet.belongsTo(User);
//  User.hasMany(Like);
 Like.belongsTo(User);
 Tweet.hasMany(Like);
 Like.belongsTo(Tweet);

module.exports = {
  sequelize,
  User,
  Tweet,
  Like,
};
