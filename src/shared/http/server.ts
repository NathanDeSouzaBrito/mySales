import "express-async-errors"
import "reflect-metadata"
import express from "express";
import cors from "cors";

import routes from "./routes/index.ts";
import ErrorHandleMiddleware from "@shared/middlewares/ErrorHandleMiddleware.ts";
import { AppDataSource } from "@shared/typeorm/data-source.ts";

AppDataSource.initialize().then(async () => {
  const app = express();
  const PORT = 3003;

  app.use(cors());
  app.use(express.json());

  app.use(routes);
  app.use(ErrorHandleMiddleware.haddleError);

  console.log("Data Source has been initialized!");

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

}).catch(error => {
  console.error("Error during Data Source initialization", error);
});
