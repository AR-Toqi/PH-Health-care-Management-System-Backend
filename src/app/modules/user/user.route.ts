import { Router } from "express";
import { userController } from "./user.controller";

const router = Router();

router.post('/create-doctor', userController.createUser);
export const userRoutes = router