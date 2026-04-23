import { Router } from "express";

const routes = Router();

routes.get("/", (req, res) => {
  return res.json({ message: "Estou rodando!" });
})

export default routes;
