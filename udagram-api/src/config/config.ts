import * as dotenv from "dotenv";
dotenv.config();

// ENV variables 
// - AWS_ACCESS_KEY_ID
// - AWS_SECRET_ACCESS_KEY
// Are Also needed

export const config = {
  username: `${process.env.POSTGRES_USERNAME}`,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  port: Number(process.env.PORT),
  db_port: Number(process.env.DB_PORT),
  host: process.env.POSTGRES_HOST,
  dialect: "postgres",
  aws_region: process.env.S3_AWS_REGION_S3,
  aws_profile: process.env.S3_AWS_PROFILE_S3,
  aws_media_bucket: process.env.S3_AWS_BUCKET_S3,
  url: process.env.URL,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};
