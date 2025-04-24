import React from "react";

const Sidebar = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <aside className="w-1/4 bg-white px-4 py-4 shadow-md rounded-md h-full">
      <h1 className="text-md font-bold mb-2">Filter By Categories</h1>
      <ul>
        {/* Render categories dynamically */}
        {categories.map((category, index) => (
          <li
            key={index}
            className={`py-2 cursor-pointer font-medium ${
              selectedCategory === category ? "text-blue-600" : "hover:text-blue-600"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;