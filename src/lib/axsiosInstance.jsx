import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://phone-api.doctor-code.net",
});
axiosInstance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})
export default axiosInstance