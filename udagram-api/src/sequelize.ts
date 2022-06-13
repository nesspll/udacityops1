import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

 export const sequelize = new Sequelize({
   username: config.username,
   password: config.password,
   database: config.database,
   host: config.host,
   port: config.db_port,

   dialect: "postgres",
   storage: ":memory:",
 });



 try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}


// export const sequelize = new Sequelize('postgres://postgres:postgres@database.cvs2bdqzrosf.us-east-1.rds.amazonaws.com:5432/postgres')

