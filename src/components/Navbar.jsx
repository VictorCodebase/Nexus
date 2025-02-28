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
        
     
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-5">
        <Link to="/" className="flex items-center space-x-2 hover:text-gray-300">
          
          <span>Home</span>
        </Link>
        <Link to="/browser" className="flex items-center space-x-2 hover:text-gray-300">
        
          <span>Articles</span>
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
