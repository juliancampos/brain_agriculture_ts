import dotenv from 'dotenv';
dotenv.config();

const EnvConfig = {
  SERVER_PORT: process.env.SERVER_PORT,
  DATABASE_TYPE: process.env.DATABASE_TYPE,
  DATABASE_HOST: process.env.DATABASE_HOST,
  DATABASE_PORT: process.env.DATABASE_PORT,
  DATABASE_USERNAME: process.env.DATABASE_USERNAME,
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
  DATABASE: process.env.DATABASE
};

export default EnvConfig;
