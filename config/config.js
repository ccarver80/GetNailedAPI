module.exports = 
{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "storage" : "GetNailed", 
    "dialect": "sqlite"
  },
  "test": {
    "username": "postgres",
    "password": null,
    "database": "startup_quotes_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.RDS_USERNAME || '',
    "password": process.env.RDS_PASSWORD || '',
    "database": process.env.RDS_DB_NAME || "getNailed",
    "host": process.env.RDS_HOSTNAME || '',
    "port": process.env.RDS_PORT || '5432',
    "dialect": "postgres"
  }
}