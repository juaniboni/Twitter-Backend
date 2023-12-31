/**
 * No hay una única forma de organizar las rutas de un sitio web.
 * Una alternativa podría ser organizar las rutas por entidad:
 */

const userRoutes = require("./userRoutes");
const tweetRoutes = require("./tweetRoutes");
const tokenRoutes = require("./tokenRoutes");

module.exports = (app) => {
  /**
   * Al construir una API REST, la convención es que las rutas relativas a los
   * usuarios se agrupen bajo la URL `/users` (en inglés y en plural). Del
   * mismo modo, las rutas relativas a los artículos se debería agrupar bajo
   * la URL `/articles` (en inglés y en plural).
   */

  app.use("/", userRoutes);

  app.use("/users", userRoutes);

  app.use("/tweets", tweetRoutes);

  app.use("/token", tokenRoutes);
};
