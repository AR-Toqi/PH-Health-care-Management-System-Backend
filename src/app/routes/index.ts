import { Router } from "express";
import { specialtyRoute } from "../modules/speciality/speciality.route";

const router = Router();

router.use('/specialty', specialtyRoute);

export const indexRoute = router