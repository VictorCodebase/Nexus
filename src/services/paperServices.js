import axios from "axios";

const API_URL = "http://localhost:5000/api";


// function to get papers from the server
export const getPapers = async () => {
    try {
        const response = await axios.get(`${API_URL}/papers`);
        return response.data;
    }catch (error) {
        console.error("Error fetching papers:", error);
        return [];
    }


}
//getting papers by id
export const getPaperById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/papers/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching paper by ID:", error);
        throw error;
    }
}