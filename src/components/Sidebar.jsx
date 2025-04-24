import React, { useState,useEffect } from "react";
import Sidebar from "../components/Sidebar";
import PaperList from "../components/PaperList";
import { getPapers } from "../services/paperServices";
import {getCategories} from "../services/categoriesServices";

const Browser = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [researchPapers, setResearchPapers] = useState([]);
  const [filteredPapers, setFilteredPapers] = useState([]);
  const [ categories, setCategories] = useState([]);

  // fetching the papers on mount
  
  useEffect (() => {
    const fetchPapers = async () => {
      try{
        const papers = await getPapers();
        setResearchPapers(papers.data);
        setFilteredPapers(papers.data);
      }catch(err){
        console.error("Error fetching papers:", err);
      }
    };
    fetchPapers();
  }, []);
  console.log(researchPapers)

  useEffect (()=> {
    const fetchCategories = async () => {
      try{
        const categoriesData = await getCategories();
        setCategories("All", ...categoriesData.data.map((cat)=> cat.category_name));
      }catch(err){
        console.error("Error fetching categories:", err);
      }
    }
    fetchCategories();
  },[])


//  filtering the papers whenever category is selected or searchterm is inputed
// ;
  useEffect(()=> {
    const filtered = researchPapers.filter((paper) =>
      selectedCategory === "All" ? true: paper.category === selectedCategory

    )
    .filter((paper) => 
    
      paper.paper_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      paper.description.toLowercase().includes(searchTerm.toLowerCase())
    
    );
    setFilteredPapers(filtered);  
  },[selectedCategory, searchTerm, researchPapers]);

  console.log("this are the filtered papers",filteredPapers);

  return (
    <div className="flex h-screen bg-gray-100 p-4 gap-4">
      {/* Sidebar component */}
      <Sidebar
        categories={categories}
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
