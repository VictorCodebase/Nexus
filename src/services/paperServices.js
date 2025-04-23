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


// posting papers
export const uploadPapers = async(formData, token) => {
    try{
        const response = await axios.post(
            `${API_URL}/papers/local`,
            formData,
            {
                headers :{
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,
                }
            }
        )
        return response.data;
    
    }catch(err){
        throw err;
    }
} 

export const getPapersByUser = async(id) => {
    try{
        const response = await axios.get(`${API_URL}/papers?publisher_id = ${id}`)
        return response.data
    }catch(err){
        console.error("Error fetching papers by user:", err);
        throw err;
    }
}