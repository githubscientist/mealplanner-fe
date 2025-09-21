import axios from "axios";

const baseURL = "https://mealplanner-edvz.onrender.com";

const protectedInstance = axios.create({
    baseURL,
    timeout: 5000,
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
});

// protectedInstance.interceptors.request.use((config) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//         config.headers["Authorization"] = `Bearer ${token}`;
//     }
//     return config;
// });

export default protectedInstance;