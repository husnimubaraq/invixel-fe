"use server"

import axiosInstance from "@/apis"
import { TRegisterRequest } from "../types/register"

export const registerRequest = async (request: TRegisterRequest) => {

    try {
        const respose = await axiosInstance.post(`/auth/register`, request)

        return {
            data: respose.data,
            status: respose.status
        }
    } catch (error: any) {
        return {
            data: error.response.data,
            status: error.response.status
        }
    }
}