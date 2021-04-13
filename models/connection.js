const db = require("knex")({
    client: "mysql",
    connection: {
      host: "localhost",
      user: "root",
      password: "",
      database: "absenSiswa",
      port: 3306,
    },
  });
  
  module.exports = db;