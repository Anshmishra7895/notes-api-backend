import express from "express";
import { USER_ROUTES } from "../../../shared/utils/app-constants.js";
import userController from "../controllers/user-controller.js";

const userRoutes = express.Router();
userRoutes.post(USER_ROUTES.REGISTER, userController.addNewUser);
userRoutes.get(USER_ROUTES.VIEW_PROFILE, userController.viewUserProfile);
userRoutes.delete(USER_ROUTES.DELETE, userController.deleteUserProfile);
userRoutes.put(USER_ROUTES.UPDATE_USER, userController.updateUserProfile);

export default userRoutes;