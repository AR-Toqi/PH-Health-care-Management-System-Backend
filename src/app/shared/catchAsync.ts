/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, RequestHandler, Response } from "express";

export const catchAsync =  (fn: RequestHandler) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
          await fn(req, res, next)  
    } catch (error: any) {
        console.error(error);
        res.status(400).json({
            success: false,
            message: "Something went wrong",
            data: error.message
        })     
    }
   }
};