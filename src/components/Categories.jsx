import { useState } from "react";
import { FlaskConical, Laptop, Wrench, Stethoscope, Atom } from "lucide-react";

const categories = [
  { name: "Science", icon: <Atom size={28} />, papers: 120 },
  { name: "Technology", icon: <Laptop size={28} />, papers: 95 },
  { name: "Engineering", icon: <Wrench size={28} />, papers: 80 },
  { name: "Mathematics", icon: <FlaskConical size={28} />, papers: 60 },
  { name: "Medicine", icon: <Stethoscope size={28} />, papers: 110 },
];

const CategoriesSection = ({ onFilter }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onFilter(category);
  };

  return (
    <section className="py-12 bg-gray-100 text-gray-900">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold">Explore Research by Category</h2>
        <p className="mt-2 text-gray-600">Find papers in your field of interest</p>
      </div>
      
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
        {categories.map((category) => (
          <div
            key={category.name}
            className={`p-4 bg-white rounded-lg shadow-md flex flex-col items-center cursor-pointer transition-transform transform hover:scale-105 ${
              selectedCategory === category.name ? "border-2 border-green-500" : ""
            }`}
            onClick={() => handleCategoryClick(category.name)}
          >
            <div className="text-green-600">{category.icon}</div>
            <h3 className="mt-2 font-semibold">{category.name}</h3>
            <p className="text-gray-500 text-sm">{category.papers}+ papers</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
