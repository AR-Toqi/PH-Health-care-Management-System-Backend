import { Request, Response } from "express";
import { specialtyService } from "./speciality.service";
import { catchAsync } from "../../shared/catchAsync";
import { sendResponse } from "../../shared/sendResponse";

const createSpecialty = catchAsync(async(req: Request, res: Response) => {
    const payload = req.body
    const result = await specialtyService.createSpecialty(payload)
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'Specialty created successfully',
        data: result
    })
})

const getAllSpecialty = catchAsync(async(req: Request, res: Response) => {
    const result = await specialtyService.getAllSpecialty()
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Specialty fetched successfully',
        data: result
    })
});

const updateSpecialty = catchAsync(async(req: Request, res: Response) => {
    const {id} = req.params
    const payload = req.body
    const result = await specialtyService.updateSpecialty(id as string, payload)
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Specialty updated successfully',
        data: result
    })
});

const deleteSpecialty = catchAsync(async(req: Request, res: Response) => {
    const {id} = req.params
    const result = await specialtyService.deleteSpecialty(id as string)
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Specialty deleted successfully',
        data: result
    })
});

export const specialtyController = {
    createSpecialty,
    getAllSpecialty,
    updateSpecialty,
    deleteSpecialty
}   