import React, { useState } from "react";
import { researchPapers, Categories } from "../utils/data";
import Sidebar from "../components/Sidebar";
import PaperList from "../components/PaperList";

const Browser = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPapers = researchPapers
    .filter((paper) =>
      selectedCategory === "All" ? true : paper.category === selectedCategory
    )
    .filter((paper) =>
      paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      paper.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      paper.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="flex h-screen bg-gray-100 p-4 gap-4">
      {/* Sidebar component */}
      <Sidebar
        categories={Categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Main Content */}
      <main className="w-3/4 bg-white px-6 py-4 shadow-md rounded-md h-full overflow-y-auto">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search papers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        />

        {/* Paper List */}
        <PaperList filteredPapers={filteredPapers} />
      </main>
    </div>
  );
};

export default Browser;
