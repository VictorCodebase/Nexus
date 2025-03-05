import React from "react";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PaperList = ({ filteredPapers }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Research Papers</h1>
      </div>

      {/* List View */}
      <div>
        {filteredPapers.map((paper, index) => (
        <Link to={`/browser/${paper.id}`} key={paper.id}>
          <div  className="py-4 border-b last:border-none">
            <h2 className="text-lg font-semibold">{paper.title}</h2>
            <p className="text-sm text-blue-500">
              By {paper.author} • Published: {paper.year}
            </p>
            <p className="text-gray-700 mt-2">{paper.description}</p>
            <button className="mt-2 text-blue-600 hover:underline">
              View Paper →
            </button>
          </div>
        </Link>
        ))};
      </div>
    </>
  );
};

export default PaperList;
