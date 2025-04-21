import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPaperById} from "../services/paperServices";
import PaperDetails from "../components/PaperDetails";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SinglePage = () => {
 const { id } = useParams();
  const [paper, setPaper] = useState(null);
  const[loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  useEffect(()=> {
    const fetchPapers = async () => {
      try{
        const data = await getPaperById(id);
        setPaper(data);
        console.log("Fetched paper:",data);
        setLoading(false);
      }catch (error) {
        setError("Error fetching paper details");
        setLoading(false);
      }
    }
    fetchPapers();
  }
  , [id]);
  const handleBack = () => {
    navigate(-1);
  };
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container mx-auto p-4">
      <button
        onClick={handleBack}
        className="flex items-center text-blue-500 hover:underline mb-4"
      >
        <ArrowLeft className="mr-2" />
        Back
      </button>
      {error && <div className="text-red-500">{error}</div>}
      {paper && <PaperDetails paper={paper} />}
    </div>
  )
}
export default SinglePage;

