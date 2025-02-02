import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'

export const baseChatHubURL = `http://localhost:5156/chathub`
export const baseScheduleURL = process.env.EXPO_PUBLIC_API_URL

const baseURL = `http://localhost:5156/api`

const axiosInstance = axios.create({
    baseURL,
})

axiosInstance.interceptors.request.use(
    async (config) => {

        let token = null

        if (process.env.EXPO === 'web') {
            token = localStorage.getItem('session')
        }

        if (process.env.EXPO === 'android' || process.env.EXPO === 'ios') {
            token = await AsyncStorage.getItem('session')
        }

        if (token) {
            config.headers.Authorization = 'Bearer ' + token
        }

        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default axiosInstance