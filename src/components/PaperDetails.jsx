import React from "react";
import { useNavigate } from "react-router-dom";


const PaperDetails = ({ paper,categoryName }) => {
  const navigate = useNavigate();
  const BASE_URL = "http://localhost:5000"; // or your production URL


  const gradients = [
    "from-blue-500 to-purple-500",
    "from-green-500 to-teal-400",
    "from-red-500 to-yellow-500",
    "from-indigo-500 to-blue-400",
    "from-pink-500 to-rose-400",
  ];

  const randomGradient = gradients[paper.paper_id % gradients.length];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="text-blue-600 flex items-center gap-2 mb-4 hover:underline"
      >
        ⬅ Back
      </button>

      {/* Header */}
      <div className={`relative bg-gradient-to-r ${randomGradient} text-white p-6 rounded-lg shadow-md`}>
        <h1 className="text-3xl font-bold capitalize">{paper.paper_name}</h1>
        <p className="mt-2 text-lg ">category: <span className="font-bold"> {categoryName}</span></p>
        <p className="mt-2 text-sm">Published on: {new Date(paper.created_at).toLocaleDateString()}</p>
      </div>

      {/* Details */}
      <div className="mt-6 space-y-6">

        {/* Description */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800">Description</h2>
          <p className="mt-2 text-gray-700 leading-relaxed">{paper.description}</p>
        </section>

        {/* File link */}
        {paper.file_url && (
          <section>
            <h2 className="text-xl font-semibold text-gray-800">Download</h2>
            <a
              href={`${BASE_URL}${paper.file_url.replace("..", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline mt-2 inline-block"
            >
              View Paper PDF
            </a>
          </section>
        )}

        {/* Co-authors */}
        {paper.coauthors && paper.coauthors.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold text-gray-800">Co-authors</h2>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              {paper.coauthors.map((author, index) => (
                <li key={index}>{author}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Tags */}
        {paper.tags && paper.tags.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold text-gray-800">Tags</h2>
            <div className="mt-2 flex flex-wrap gap-2">
              {paper.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default PaperDetails;
