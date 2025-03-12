import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../services/authServices";
import { CircleUser, LogOut, User } from "lucide-react";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const isAuthenticated = true;

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-gray-800 text-white p-4 h-16 flex items-center justify-between">
      <h1 className="text-3xl font-bold">NeXus</h1>

      <div className="flex space-x-5">
        <Link to="/" className="hover:text-gray-300">
          Home
        </Link>
        <Link to="/browser" className="hover:text-gray-300">
          Articles
        </Link>

        {isAuthenticated ? (
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="flex items-center space-x-2 hover:text-gray-300"
            >
              <CircleUser size={24} />
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-black shadow-md rounded-lg border">
                <Link
                  to="/profile"
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                >
                  <User size={16} />
                  Profile
                </Link>
                <button
                  className="flex w-full items-center gap-2 px-4 py-2 text-red-500 hover:bg-gray-100"
                  onClick={() => {
                    logout(), navigate("/login");
                  }}
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login" className="hover:text-gray-300">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
