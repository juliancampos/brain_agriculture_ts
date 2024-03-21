import "reflect-metadata";
import { DataSource } from "typeorm";
import { Producer } from '../entities/Producer';
import EnvConfig from '../../../main/config/env';
import { Farm } from "../entities/Farm";

const AppDataSource = new DataSource({
  type: 'postgres',
  host: EnvConfig.DATABASE_HOST,
  port: Number(EnvConfig.DATABASE_PORT),
  username: EnvConfig.DATABASE_USERNAME,
  password: EnvConfig.DATABASE_PASSWORD,
  database: EnvConfig.DATABASE_NAME,
  synchronize: true,
  logging: false,
  entities: [Producer, Farm],
  migrations: ["./src/infra/database/migrations/**/*.ts"]
});

export default AppDataSource;
