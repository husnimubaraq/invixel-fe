"use server"

import axiosInstance from "@/apis"
import { TLoginRequest } from "../types/login"

export const loginRequest = async (request: TLoginRequest) => {

    try {
        const respose = await axiosInstance.post(`/auth/login`, request)

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