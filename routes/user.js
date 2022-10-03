import express from "express";
import {
  getAll,
  puttUser,
  saveUser,
  deleteUser,
  patchUser,
} from "../controllers/user.controller.js";

const routes = express.Router();

routes.get("/", getAll);

routes.put("/:id", puttUser);

routes.post("/", saveUser);

routes.delete("/:id", deleteUser);

routes.patch("/", patchUser);

export default routes;
