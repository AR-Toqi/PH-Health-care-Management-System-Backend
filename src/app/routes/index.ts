import { Router } from "express";
import { specialtyRoute } from "../modules/speciality/speciality.route";
import { authRoute } from "../modules/auth/auth.route";
import { userRoutes } from "../modules/user/user.route";

const router = Router();

router.use('/auth', authRoute);
router.use('/specialty', specialtyRoute);
router.use('/users', userRoutes);

export const indexRoute = router