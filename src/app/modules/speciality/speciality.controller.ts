import { Request, Response } from "express";
import { specialtyService } from "./speciality.service";

const createSpecialty = async (req: Request, res: Response) =>{
    try {
        const payload = req.body

    const result = await specialtyService.createSpecialty(payload)
    res.status(201).json({
        success: true,
        massage: "Specialty created successfully",
        data: result
    })
    } catch (error) {
        console.error(error);
        res.status(400).json({
            success: false,
            message: "Something went wrong",
            data: error
        })     
    }
};

export const specialtyController = {
    createSpecialty
}   