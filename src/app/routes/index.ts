import { Router } from "express";
import { specialtyRoute } from "../modules/speciality/speciality.route";
import { authRoute } from "../modules/auth/auth.route";

const router = Router();

router.use('/auth', authRoute);
router.use('/specialty', specialtyRoute);

export const indexRoute = router