import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


import { getPaperById} from "../services/paperServices";
import { getCategories } from "../services/categoriesServices";

import PaperDetails from "../components/PaperDetails";

import { ArrowLeft } from "lucide-react";

const SinglePage = () => {
  const { id } = useParams();
  const [paper, setPaper] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [paperData, categoriesData] = await Promise.all([
          getPaperById(id),
          getCategories(),
        ]);

        setPaper(paperData);
        setCategories(categoriesData);
        // Check if the paper is found
        console.log("Fetched paper:", paperData);
        console.log("Fetched categories:", categoriesData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching paper or categories");
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  const handleBack = () => {
    navigate(-1);
  };

  if (loading) return <div>Loading...</div>;

  // Get the category name by matching the paper's category_id
  const category = categories.find(
    (cat) => cat.category_id === paper.category_id
  );

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

      {paper && (
        <PaperDetails
          paper={paper}
          categoryName={category ? category.category : "Unknown"}
        />
      )}
    </div>
  );
};

export default SinglePage;  