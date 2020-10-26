require('dotenv').config();

module.exports = {
  distDir: 'build',
  env: {
    APP_NAME: process.env.APP_NAME,
    PORT: process.env.PORT,
    URL: process.env.URL,
    GA: process.env.GA,
  },
};
