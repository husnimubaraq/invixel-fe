// import { axiosInstance } from '.';

// const webAxiosInstance = axiosInstance

// webAxiosInstance.interceptors.request.use(
//     async (config) => {

//         let token = localStorage.getItem('session')

//         if (token) {
//             config.headers.Authorization = 'Bearer ' + token
//         }

//         return config
//     },
//     (error) => {
//         return Promise.reject(error)
//     }
// )

// export default webAxiosInstance