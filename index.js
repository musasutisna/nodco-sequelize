const { Sequelize } = require('sequelize');

/**
 * Create a new configuration sequelize.
 *
 * @param   object
 * @return  object
 */
module.exports = function nodcoSequelizeConfig(config = {}) {
  /**
   * Database client
   */
  const client = {};

  /**
   * Start database connection.
   *
   * @param   string
   * @param   callback
   * @return  void
   */
  async function connect(key, cb) {
    try {
      const option = config[key];

      const sequelizeClient = new Sequelize(
        option.database,
        option.username,
        option.password,
        {
          host: option.host,
          port: option.port,
          dialect: option.dialect,
          logging: process.env.NODE_ENV !== 'production' ? console.log : false,
        }
      );

      await sequelizeClient.authenticate();

      client[key] = sequelizeClient;

      console.log(`database connected "${key}"`);

      if (cb) cb();
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  }

  /**
   * Close all connection.
   *
   * @return  void
   */
  async function close() {
    for (var key in config) {
      await client[key].close();

      console.log(`database disconnect "${key}"`);
    }
  }

  return {
    connect,
    close,
    client
  };
};
