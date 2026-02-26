import { Request, Response } from "express";
import { catchAsync } from "../../shared/catchAsync";
import { userService } from "./user.service";
import { sendResponse } from "../../shared/sendResponse";
import status from "http-status";

const createUser = catchAsync(async(req: Request, res: Response) => {
    console.log("req.body:", req.body);
    console.log("typeof req.body:", typeof req.body);
    const payload = req.body
    const result = await userService.createDoctor(payload)
    sendResponse(res, {
        statusCode: status.CREATED,
        success: true,
        message: 'Doctor created successfully',
        data: result
    })
});

export const userController = {
    createUser
}