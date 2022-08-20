module.exports = {
  development: {
    name: process.env.RDS_DB_NAME,
    host: process.env.RDS_HOSTNAME,
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    port: process.env.RDS_PORT,
    dialect: "postgres",
  },
  test: {
    name: process.env.RDS_DB_NAME,
    host: process.env.RDS_HOSTNAME,
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    port: process.env.RDS_PORT,
    dialect: "postgres",
  },
  production: {
    name: process.env.RDS_DB_NAME,
    host: process.env.RDS_HOSTNAME,
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    port: process.env.RDS_PORT,
    dialect: "postgres",
  },
};
