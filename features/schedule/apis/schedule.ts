import axios, { AxiosError } from "axios";
import { TCreateBooking } from "../types/schedule";
import { baseScheduleURL } from "@/apis";

export const createBookingRequest = async (request: TCreateBooking) => {
    try {
        const response = await axios.post(`${baseScheduleURL}/booking/create`, request, {
            headers: {
                "x-api-key": process.env.EXPO_PUBLIC_API_KEY
            }
        })
    
        return response
    } catch (error: any) {
        return error.response
    }
}