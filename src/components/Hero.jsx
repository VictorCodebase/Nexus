import { Search, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const categories = ["All", "Science", "Technology", "Engineering", "Mathematics"];

// Mock search results for demonstration
const mockPapers = [
  { id: 1, title: "The Future of AI in Technology", category: "Technology" },
  { id: 2, title: "Quantum Physics and its Applications", category: "Science" },
  { id: 3, title: "Advancements in Civil Engineering", category: "Engineering" },
  { id: 4, title: "Mathematical Models in Biology", category: "Mathematics" },
];

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [showDropdown, setShowDropdown] = useState(false);

  // Filtered search results
  const filteredPapers = mockPapers.filter((paper) => {
    const queryWords = searchQuery.toLowerCase().split(" ").filter(Boolean); // Split query into words
    const titleWords = paper.title.toLowerCase().split(" "); // Split title into words

    // Check if any query word matches a word in the title
    const matchesQuery = queryWords.some((queryWord) =>
      titleWords.includes(queryWord)
    );

    // Check if the category matches the filter
    const matchesCategory = filter === "All" || paper.category === filter;

    return matchesQuery && matchesCategory;
  });

  return (
    <section className="bg-gray-900 text-white py-16 px-6 md:px-12 text-center relative">
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

            {/* Search Results Popup */}
            {searchQuery && (
              <div className="absolute top-full left-0 mt-2 bg-white text-black shadow-lg rounded-md w-full z-50">
                {filteredPapers.length > 0 ? (
                  <ul className="divide-y divide-gray-200">
                    {filteredPapers.map((paper) => (
                      <li key={paper.id} className="px-4 py-2 hover:bg-gray-100">
                        <Link
                          to={`/browser/${paper.id}`}
                          className="text-blue-600 hover:underline"
                        >
                          {paper.title}
                        </Link>
                        <p className="text-sm text-gray-500">{paper.category}</p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="px-4 py-2 text-gray-500">No results found.</p>
                )}
              </div>
            )}
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
      </div>
    </section>
  );
};

export default Hero;