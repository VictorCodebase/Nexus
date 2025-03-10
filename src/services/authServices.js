import axios from "axios";

export const login = async (email, password) => {
    try {
        const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
        });
        return response.data;
    } catch (error) {
        return { error: error.response.data.message || error.message };
    }
}   

//signup function
export const signup = async (firstName, lastName, email, password) => {
    try {
        const response = await axios.post("http://localhost:5000/api/auth/register", {
        firstName,
        lastName,
        email,
        password,
        });
        localStorage.setItem("token", response.data.token);
        return response.data;
    } catch (error) {
        return { error: error.response.data.message || error.message };
    }
}

//Getting the stored token
export const getToken = () => {
    return localStorage.getItem("token") || null;
}

//getting the authentication headers
export const authHeaders = () => {
    return { Authorization: `Bearer ${getToken()}` };
}

