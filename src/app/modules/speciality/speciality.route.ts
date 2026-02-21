import { Router } from "express";
import { specialtyController } from "./speciality.controller";

const router = Router();

router.post ('/', specialtyController.createSpecialty);
router.get ('/', specialtyController.getAllSpecialty);
router.patch ('/:id', specialtyController.updateSpecialty);
router.delete ('/:id', specialtyController.deleteSpecialty);

export const specialtyRoute = router