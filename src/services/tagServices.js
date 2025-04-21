import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const getTags = async () => {
    try {
        const response = await axios.get(`${API_URL}/tags`);
        return response.data;
    } catch (error) {
        console.error("Error fetching tags:", error);
        return [];
    }
}