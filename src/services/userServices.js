import axios from "axios";

 const API_URL = "http://localhost:5000/api";


 export const getUsers = async () => {
        try {
            const response = await axios.get(`${API_URL}/users/authors`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );
            return response.data;
        } catch (error) {
            console.error("Error fetching users:", error);
            return [];
        }
    }