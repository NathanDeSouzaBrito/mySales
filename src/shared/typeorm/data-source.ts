import "reflect-metadata";
import "dotenv/config";
import { DataSource } from "typeorm";

const port = process.env.DB_PORT as number | undefined;

export const AppDataSource = new DataSource({
  type: "postgres",
  host : process.env.DB_HOST as string,
  port : port as number,
  username : process.env.DB_USER as string,
  password : process.env.DB_PASSWORD as string,
  database : process.env.DB_NAME as string,
  entities : ["./src/modules/**/database/entities/*.{ts, js}"],
  migrations : ["./src/shared/typeorm/migrations/*.{ts, js}"],
})
