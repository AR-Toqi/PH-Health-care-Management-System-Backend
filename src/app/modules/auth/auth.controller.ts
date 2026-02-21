import { Request, Response } from "express";
import { catchAsync } from "../../shared/catchAsync";
import { sendResponse } from "../../shared/sendResponse";
import { authService } from "./auth.service";

const registerPatient = catchAsync(async(req: Request, res: Response) => {
    const payload = req.body
    const result = await authService.registerUser(payload)
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'Patient registered successfully',
        data: result
    })
});

const loginPatient = catchAsync(
    async(req: Request, res: Response) => {
    const payload = req.body
    console.log(payload)
    const result = await authService.loginPatient(payload)
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Patient login successfully',
        data: result
    })
});

export const authController = {
    registerPatient,
    loginPatient
}