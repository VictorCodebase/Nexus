import React, { useState } from "react";
import { researchPapers, Categories } from "../utils/data";
import  Sidebar  from "../components/Sidebar";
import PaperList  from "../components/PaperList";




const Browser = () => {
  
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredPapers =
    selectedCategory === "All"
      ? researchPapers
      : researchPapers.filter((paper) => paper.category === selectedCategory);

  return (
    <div className="flex h-screen bg-gray-100 p-4 gap-4">
      {/* sidebar component */}
      <Sidebar
        categories={Categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
  

      {/* Main Content */}
      <main className="w-3/4 bg-white px-6 py-4 shadow-md rounded-md h-full overflow-y-auto">
        {/* Description Section */}
        <PaperList filteredPapers={filteredPapers} />
  
      </main>
    </div>
  );
};

export default Browser;
