import React from "react";

const PaperList = ({ filteredPapers }) => {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Research Papers</h1>
      </div>

      {/* List View */}
      <div>
        {filteredPapers.map((paper, index) => (
          <div key={paper.id} className="py-4 border-b last:border-none">
            <h2 className="text-lg font-semibold">{paper.title}</h2>
            <p className="text-sm text-blue-500">
              By {paper.author} • Published: {paper.year}
            </p>
            <p className="text-gray-700 mt-2">{paper.description}</p>
            <button className="mt-2 text-blue-600 hover:underline">
              View Paper →
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default PaperList;
