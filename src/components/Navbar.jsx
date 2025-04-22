import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CircleUser, LogOut, User } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const { user, handleLogout,loading } = useAuth(); // Access user and logout function from AuthContext

  // Toggle dropdown visibility
  const toggleDropdown = () => setShowDropdown(!showDropdown);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  console.log("Navbar rendering. User:", user, "Loading:", loading);

  useEffect(() => {
    console.log("Navbar rendering. User:", user, "Loading:", loading);
  }, [user, loading]);
  


  return (
    <div className="bg-gray-800 text-white p-4 h-16 flex items-center justify-between">
      {/* Logo */}
      <h1 className="text-3xl font-bold">NeXus</h1>

      {/* Navigation Links */}
      <div className="flex space-x-5">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/browser" className="hover:text-gray-300">Articles</Link>

        {/* Authenticated User Section */}
        {loading ? null : user ? (
          <div className="relative flex items-center space-x-4" ref={dropdownRef}>
            {/* Submit Button */}
            <Link to="/submit" className="hover:text-gray-300">
              <span className="px-3 py-2 bg-green-400 rounded-3xl text-md font-semibold">
                Submit
              </span>
            </Link>

            {/* Profile Icon & Dropdown */}
            <button
              onClick={toggleDropdown}
              className="flex items-center space-x-2 hover:text-gray-300"
            >
              <CircleUser size={24} />
            </button>

            {showDropdown && (
              <div className="absolute right-0 top-5 mt-2 w-40 bg-white text-black shadow-md rounded-lg border">
                <Link
                  to="/profile"
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                >
                  <User size={16} />
                  Profile
                </Link>
                <button
                  className="flex w-full items-center gap-2 px-4 py-2 text-red-500 hover:bg-gray-100"
                  onClick={async () => {
                    await handleLogout();
                    navigate("/login");
                  }}
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          // Login Link for Unauthenticated Users
          <Link to="/login" className="hover:text-gray-300">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;