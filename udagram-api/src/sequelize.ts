import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

//  export const sequelize = new Sequelize({
//    username: config.username,
//    password: config.password,
//    database: config.database,
//    host: config.host,
//    port: config.port_db,
//    dialect: "postgres",
//    storage: ":memory:",
//    retry: {
//     match: [
//         /ETIMEDOUT/,
//         /EHOSTUNREACH/,
//         /ECONNRESET/,
//         /ECONNREFUSED/,
//         /ETIMEDOUT/,
//         /ESOCKETTIMEDOUT/,
//         /EHOSTUNREACH/,
//         /EPIPE/,
//         /EAI_AGAIN/,
//         /SequelizeConnectionError/,
//         /SequelizeConnectionRefusedError/,
//         /SequelizeHostNotFoundError/,
//         /SequelizeHostNotReachableError/,
//         /SequelizeInvalidConnectionError/,
//         /SequelizeConnectionTimedOutError/
//     ],
//     max: 5
//     }
//  });

export const sequelize = new Sequelize('postgres://postgres:postgres@database.cvs2bdqzrosf.us-east-1.rds.amazonaws.com:5432/postgres')

