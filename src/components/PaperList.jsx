import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getPapers } from "../services/paperServices";

const PaperList = ({ filteredPapers }) => {
  const navigate = useNavigate();
  // Sample papers data (Replace with API data)
  const [papers, setPapers] = React.useState([]);
  useEffect(() => {
    const fetchPapers = async () => {
      try {
        const response = await getPapers();
        setPapers(response.data);
        console.log("Fetched papers:", response.data);
      } catch (error) {
        console.error("Error fetching papers:", error);
      }
    };
    fetchPapers();
  }, []);

  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Research Papers</h1>
      </div>

      {/* List View */}
      <div>
        {papers.map((paper, index) => (
          <div className="bg-white p-4 mb-4  shadow-md" key={index}>
            <h2 className="text-lg font-semibold">{paper.paper_name}</h2>
            <p className="text-sm text-blue-500">
              Published: {new Date(paper.created_at).toLocaleDateString()}
            </p>
            <a
              href={`http://localhost:5000/uploads${paper.file_url.replace(
                "..",
                ""
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-blue-600 hover:underline inline-block"
            >
              View Paper →
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default PaperList;
