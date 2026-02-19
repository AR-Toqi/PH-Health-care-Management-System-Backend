import { Router } from "express";
import { specialtyController } from "./speciality.controller";

const router = Router();

router.post ('/', specialtyController.createSpecialty);

export const specialtyRoute = router