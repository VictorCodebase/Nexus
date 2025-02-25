import React, { useState } from "react";
import { researchPapers, Categories } from "../utils/data";




const Browser = () => {
  
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredPapers =
    selectedCategory === "All"
      ? researchPapers
      : researchPapers.filter((paper) => paper.category === selectedCategory);

  return (
    <div className="flex h-screen bg-gray-100 p-4 gap-4">
      {/* Sidebar */}
      <aside className="w-1/4 bg-white px-4 py-4 shadow-md rounded-md h-full" >
        <h1 className="text-md font-bold mb-2">Filter By Categories</h1>
        <ul>
          <li
            className="py-2 cursor-pointer font-medium hover:text-blue-600"
            onClick={() => setSelectedCategory("All")}
          >
            All
          </li>
          {Categories.map((category) => (
            <li
              key={category}
              className="py-1 cursor-pointer text-blue-500 hover:text-blue-700"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="w-3/4 bg-white px-6 py-4 shadow-md rounded-md h-full overflow-y-auto">
        {/* Description Section */}
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
      </main>
    </div>
  );
};

export default Browser;
