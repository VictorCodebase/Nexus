import axios from "axios";

export const login = async (email, password) => {
    try {
        const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
        });
        if (response.data.token){
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", JSON.stringify(response.data.user));
        }
        return response.data;
    } catch (error) {
        return { error: error.response.data.message || error.message };
    }
}   

//signup function
export const signup = async (fname, lname, email, password) => {
    try {
        const response = await axios.post("http://localhost:5000/api/auth/register", {
        fname,
        lname,
        email,
        password,
        });
        if (response.data.token){

            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", JSON.stringify(response.data.user));
        }

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

