module.exports = {
  development: {
    host     : process.env.RDS_HOSTNAME,
    user     : "ccarver80",
    password : process.env.RDS_PASSWORD,
    port     : process.env.RDS_PORT,
    dialect : "postgres"
  },
  test: {
    host     : process.env.RDS_HOSTNAME,
    user     : "ccarver80",
    password : process.env.RDS_PASSWORD,
    port     : process.env.RDS_PORT,
    dialect : "postgres",
  },
  production: {
    host     : process.env.RDS_HOSTNAME,
    user     : "ccarver80",
    password : process.env.RDS_PASSWORD,
    port     : process.env.RDS_PORT,
    dialect : "postgres"
  }
};