//Routes to created new querys using entities structure

import { Router } from "express";
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/user.controllers";

const router = Router();

////Query select * user
router.get("/users", getUsers);

//Query select Id
router.get("/users/:id", getUser);

//Query create new user
router.post("/users", createUser);

//Query update id selected
router.put("/users/:id", updateUser);

//query delete id selected
router.delete("/users/:id", deleteUser);

export default router;