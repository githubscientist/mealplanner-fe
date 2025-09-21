import protectedInstance from "../instances/protectedInstance";
import instance from "../instances/instance";

const authServices = {
    register: async (userData) => {
        try {
            const response = await instance.post("/auth/register", userData);
            return response.data;
        } catch (error) {
            return { message: error.message, status: error.response?.status }
        }
    },

    login: async (credentials) => {
        try {
            const response = await protectedInstance.post("/auth/login", credentials);
            return response.data;
        } catch (error) {
            return { message: error.message, status: error.response?.status }
        }
    },

    me: async () => {
        try {
            const response = await protectedInstance.get("/auth/me");
            return response;
        } catch (error) {
            return {
                message: error.message, status: error.response?.status
            }
        }
    },

    logout: async () => {
        try {
            const response = await protectedInstance.post("/auth/logout");
            return response;
        } catch (error) {
            return { message: error.message, status: error.response?.status }
        }
    }
}

export default authServices;