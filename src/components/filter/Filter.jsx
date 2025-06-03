import { FiGrid, FiChevronDown } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const categories = ["Design", "Development", "Marketing"];
const sortOptions = ["Deadline", "Newest", "Priority"];

const Filter = () => {
  const location = useLocation();
  const isTask = location.pathname === "/task";

  const [categoryOpen, setCategoryOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Category");
  const [selectedSort, setSelectedSort] = useState("Deadline");

  const categoryRef = useRef(null);
  const sortRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!categoryRef.current?.contains(e.target)) setCategoryOpen(false);
      if (!sortRef.current?.contains(e.target)) setSortOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="pb-[15px] w-full flex items-center justify-between">
      {/* Search Input */}
      <div className="w-full relative max-w-[480px]">
        <input
          type="text"
          placeholder={`Search for ${isTask ? "tasks" : "mentors"} ...`}
          className="w-full border border-secondary-300 h-[52px] px-[15px] pr-[45px] rounded-xl text-secondary-500 focus:outline-none"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 text-secondary-500 absolute right-[15px] top-1/2 transform -translate-y-1/2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
          />
        </svg>
      </div>

      {/* Category & Sort By */}
      <div className="flex items-center gap-[15px]">
        {/* Category Dropdown */}
        <div ref={categoryRef} className="relative">
          <div
            onClick={() => {
              setCategoryOpen((prev) => !prev);
              setSortOpen(false);
            }}
            className="flex cursor-pointer items-center gap-2 border px-[20px] py-[15px] border-secondary-300 h-[52px] rounded-xl text-secondary-500 text-xs font-semibold"
          >
            <FiGrid className="text-base text-secondary-300" />
            {selectedCategory}
          </div>
          {categoryOpen && (
            <div className="absolute z-10 top-[60px] left-0 w-full bg-white border border-secondary-300 rounded-xl shadow-lg">
              {categories.map((item) => (
                <div
                  key={item}
                  onClick={() => {
                    setSelectedCategory(item);
                    setCategoryOpen(false);
                  }}
                  className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Sort Dropdown */}
        <div ref={sortRef} className="relative">
          <div
            onClick={() => {
              setSortOpen((prev) => !prev);
              setCategoryOpen(false);
            }}
            className="flex items-center gap-2 cursor-pointer border px-[20px] py-[15px] border-secondary-300 h-[52px] rounded-xl text-secondary-500 text-xs font-semibold"
          >
            Sort By: {selectedSort}
            <FiChevronDown className="text-base text-secondary-300" />
          </div>
          {sortOpen && (
            <div className="absolute z-10 top-[60px] left-0 w-full bg-white border border-secondary-300 rounded-xl shadow-lg">
              {sortOptions.map((item) => (
                <div
                  key={item}
                  onClick={() => {
                    setSelectedSort(item);
                    setSortOpen(false);
                  }}
                  className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Filter;
