import React from "react";

const Sidebar = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <aside className="w-1/4 bg-white px-6 py-6 shadow-lg rounded-lg h-full">
      <h1 className="text-lg font-bold mb-4 text-gray-800">Filter By Categories</h1>
      <ul className="space-y-2">
        {/* Render categories dynamically */}
        {categories.map((category) => (
          <li
            key={category.category_id || category} // Handle cases where category is a string
            className={`py-2 px-4 rounded-md cursor-pointer font-medium transition-all duration-200 ${
              selectedCategory === category.category_id || selectedCategory === category
                ? "bg-blue-100 text-blue-600 font-semibold"
                : "text-gray-700 hover:bg-gray-100 hover:text-blue-500"
            }`}
            onClick={() => setSelectedCategory(category.category_id || category)} // Handle both category_id and string
          >
            {category.category_name || category} {/* Handle both category_name and string */}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;