const express = require("express");
const {
    allUsersHandler,
    newUserHandler,
    oneUserHandler,
    deleteUserHandler,
    patchUserHandler,
    putUserHandler,
    userLoginHandler,
} = require("../handlers/UserHandlers.js");

const userRouter = express.Router();

userRouter.route("/").get(allUsersHandler).post(newUserHandler);

userRouter
    .route("/:id")
    .get(oneUserHandler)
    .delete(deleteUserHandler)
    .put(putUserHandler)
    .patch(patchUserHandler);
userRouter.route("/login").post(userLoginHandler);

module.exports = userRouter;
