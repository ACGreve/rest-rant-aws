require('dotenv').config()

module.exports = {
  "development": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": "awseb-e-mwkmkkwcwy-stack-awsebrdsdatabase-0msr0x8il8nt.cgxdbk1gtxet.us-east-2.rds.amazonaws.com",
    "port":"5432",
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.RDS_USERNAME,
    "password": process.env.RDS_PASSWORD,
    "database": process.env.RDS_DB_NAME,
    "host": process.env.RDS_HOSTNAME,
    "port": process.env.RDS_PORT,
    "dialect": "postgres",
    "dialectOptions": {
      "ssl": {
        "require": true,
        "rejectUnauthorized": false
      }
    }
  }
}
