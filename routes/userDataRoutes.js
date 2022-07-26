import express from "express";
import userDataController from "../controller/userDataController";

const userDataRouter = express.Router();

userDataRouter
  .route("/userdata")
  .get(userDataController.getAllUserData)
  .post(userDataController.createUserData);

userDataRouter
  .route("/userdata/:id")
  .get(userDataController.getUserById)
  .patch(userDataController.updateUserData);

export default userDataRouter;
