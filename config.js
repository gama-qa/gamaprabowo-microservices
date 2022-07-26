require("dotenv").config();

export default {
  port: process.env.PORT,
  databaseConn: process.env.DATABASE_CONN,
};
