import { UserStatus } from "../../../generated/prisma/enums";
import { auth } from "../../lib/auth";

interface IRegisterPatientPayload {
    name: string,
    email: string,
    password: string
}

interface ILoginPatientPayload {
    email: string,
    password: string
}
const registerUser = async (payload: IRegisterPatientPayload) => {
    const {name, email, password} = payload
    const data = await auth.api.signUpEmail({
        body:{
            name,
            email,
            password
        }
    });
    if (!data.user){
        throw new Error("Patient registration failed");
    }
    return data;
};

const loginPatient = async (payload: ILoginPatientPayload) => {
    const {email, password} = payload
    const data = await auth.api.signInEmail({
        body:{
            email,
            password
        }
    });
    if (!data.user){
        throw new Error("Patient login failed");
    }
    if (data.user.status === UserStatus.BLOCKED){
        throw new Error("Patient blocked");
    }
    if (data.user.status === UserStatus.DELETED || data.user.isDeleted){
        throw new Error("Patient deleted");
    }
    return data;
};

export const authService = {
    registerUser,
    loginPatient
}