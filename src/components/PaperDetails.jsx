import React from "react";
import { useNavigate } from "react-router-dom";





const PaperDetails = ({ paper }) => {
  const navigate = useNavigate();

  const gradients = [
    "from-blue-500 to-purple-500",
    "from-green-500 to-teal-400",
    "from-red-500 to-yellow-500",
    "from-indigo-500 to-blue-400",
    "from-pink-500 to-rose-400",
  ];

  const randomGradient = gradients[paper.id % gradients.length];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="text-blue-600 flex items-center gap-2 mb-4 hover:underline"
      >
        ⬅ Back
      </button>

      {/* Header Section */}
      <div className={`relative bg-gradient-to-r ${randomGradient} text-white p-6 rounded-lg shadow-md`}>
        <h1 className="text-4xl font-bold">{paper.title}</h1>
        <p className="mt-2 text-sm">
          <span className="font-semibold">{paper.author}</span> • Published: {paper.year}
        </p>
      </div>

      {/* Main Content */}
      <div className="mt-6 space-y-6">
      
        <section>
          <h2 className="text-2xl font-semibold text-gray-800">Abstract</h2>
          <p className="mt-2 text-gray-700 leading-relaxed">{paper.abstract}</p>
        </section>

        {/* Journal & DOI */}
        <section className="border-l-4 border-blue-500 pl-4">
          <p className="text-lg text-gray-600">
            <strong>Journal:</strong> {paper.journal}
          </p>
          <p className="text-lg text-gray-600">
            <strong>DOI:</strong>{" "}
            <a href={`https://doi.org/${paper.doi}`} className="text-blue-500 underline">
              {paper.doi}
            </a>
          </p>
        </section>

        {/* Keywords */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800">Keywords</h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {paper.keywords.map((keyword, index) => (
              <span
                key={index}
                className="bg-blue-200 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
              >
                {keyword}
              </span>
            ))}
          </div>
        </section>

        {/* Citations */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800">Citations</h2>
          <p className="text-gray-700">{paper.citations} citations</p>
        </section>
      </div>
    </div>
  );
};

export default PaperDetails;
