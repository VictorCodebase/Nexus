import { Search, FileText, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const categories = [
  "All",
  "Science",
  "Technology",
  "Engineering",
  "Mathematics",
];

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <section className="bg-gray-900 text-white py-16 px-6 md:px-12 text-center">
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Discover & Share Research Papers
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Access a vast collection of scholarly articles, share your work, and
          collaborate with researchers worldwide.
        </p>

        {/* Search & Filter Section */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4">
          {/* Search Bar */}
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search papers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pr-10 rounded-md text-gray-100 focus:outline-none border-2 border-gray-700 bg-gray-800"
            />
            <Search
              className="absolute right-3 top-2.5 text-gray-400"
              size={18}
            />
          </div>

          {/* Category Filter Dropdown */}
          <div className="relative">
            <button
              className="flex items-center px-4 py-2 bg-gray-700 rounded-md hover:bg-gray-600 transition"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              {filter} <ChevronDown className="ml-2" size={18} />
            </button>

            {showDropdown && (
              <div className="absolute top-full left-0 mt-1 bg-white text-black shadow-md rounded-md w-40 z-50">
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

        {/* Call to Action */}
        {/* <div className="mt-6">
          <Link to="/submit">
            <button className="bg-green-600 hover:bg-green-500 px-6 py-3 rounded-lg text-lg font-semibold">
              Submit Your Paper
            </button>
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
