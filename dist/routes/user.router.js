"use strict";
//Routes to created new querys using entities structure
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controllers_1 = require("../controllers/user.controllers");
const router = (0, express_1.Router)();
////Query select * user
router.get("/users", user_controllers_1.getUsers);
//Query select Id
router.get("/users/:id", user_controllers_1.getUser);
//Query create new user
router.post("/users", user_controllers_1.createUser);
//Query update id selected
router.put("/users/:id", user_controllers_1.updateUser);
//query delete id selected
router.delete("/users/:id", user_controllers_1.deleteUser);
exports.default = router;
