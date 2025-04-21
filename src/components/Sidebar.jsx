import React, { useState, useEffect } from 'react';
import { getCategories } from "../services/categoriesServices";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  const [allCategories, setAllCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategories();
        console.log("Raw response:", response);
        if (response && Array.isArray(response.data)) {
          setAllCategories(response.data);
        } else {
          console.warn("Unexpected response shape:", response);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
        setError("Failed to load categories.");
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  console.log("Sidebar Render → selectedCategory:", selectedCategory);
  console.log("Sidebar Render → allCategories:", allCategories);

  return (
    <aside className="w-1/4 bg-white px-4 py-4 shadow-md rounded-md h-full">
      <h1 className="text-md font-bold mb-2">Filter By Categories</h1>

      {loading && <p>Loading categories...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <ul>
        <li
          className={`py-2 cursor-pointer font-medium ${
            selectedCategory === 'All' ? 'text-blue-600' : 'hover:text-blue-600'
          }`}
          onClick={() => setSelectedCategory('All')}
        >
          All
        </li>

        {allCategories.length > 0 ? (
          allCategories.map((category) => (
            <li
              key={category.category_id}
              className={`py-1 cursor-pointer border-b border-gray-200 ${
                selectedCategory === category.category_id
                  ? 'text-blue-600 font-semibold'
                  : 'text-gray-700 hover:text-blue-500'
              }`}
              onClick={() => {
                console.log("Clicked:", category.category_id);
                setSelectedCategory(category.category_id);
              }}
            >
              {category.category}
            </li>
          ))
        ) : (
          !loading && <li className="text-sm text-gray-400">No categories found.</li>
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;
