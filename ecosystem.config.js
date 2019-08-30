module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [
    {
      name      : 'API',
      script    : 'index.js',
      watch     : true
    }
  ]
};
