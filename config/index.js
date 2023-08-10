const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  urlDb: process.env.MONGO_URL,
};
