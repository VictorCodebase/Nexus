import React from "react";
import { useParams } from "react-router-dom";

const PaperDetails = ({ paper }) => {


  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{paper.title}</h1>
      <p className="text-sm text-gray-500">
        By {paper.author} • Published: {paper.year}
      </p>
      <p className="mt-4 text-gray-700">{paper.description}</p> {/* Full content */}
    </div>
  );
};

export default PaperDetails;
