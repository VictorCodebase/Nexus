import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ChevronDown, FileText, Home, User, LogIn } from "lucide-react";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [showDropdown, setShowDropdown] = useState(false);

  const categories = ["All", "AI", "Blockchain", "Cybersecurity", "Data Science"];

  return (
    <div className="bg-gray-800 text-white p-4 h-16 flex items-center justify-between">
    
      <h1 className="text-3xl font-bold">NeXus</h1>

      
      <div className="flex items-center space-x-4">
        
        <div className="relative">
          <input
            type="text"
            placeholder="Search papers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 rounded-md text-gray-100 focus:outline-none border-2 border-gray-700 align-middle"
          />
          <Search className="absolute right-3 top-2 text-gray-500" size={18} />
        </div>

      
        <div className="relative">
          <button
            className="flex items-center px-4 py-2 bg-gray-700 rounded-md hover:bg-gray-600"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            {filter} <ChevronDown className="ml-2" size={18} />
          </button>

          {showDropdown && (
            <div className="absolute top-full left-0 mt-1 bg-white text-black shadow-md rounded-md w-36">
              {categories.map((category) => (
                <div
                  key={category}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => {
                    setFilter(category);
                    setShowDropdown(false);
                  }}
                >
                  {category}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-5">
        <Link to="/" className="flex items-center space-x-2 hover:text-gray-300">
          
          <span>Home</span>
        </Link>
        <Link to="/browser" className="flex items-center space-x-2 hover:text-gray-300">
        
          <span>Browser</span>
        </Link>
        <Link to="/paper-details" className="flex items-center space-x-2 hover:text-gray-300">
          
          <span>Paper Details</span>
        </Link>
        <Link to="/login" className="flex items-center space-x-2 hover:text-gray-300">
          <LogIn size={20} />
          <span>Login</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
