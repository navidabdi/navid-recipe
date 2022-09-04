import { GiFullPizza } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [search, setSearch] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      const getSearch = async () => {
        const url = `https://api.spoonacular.com/recipes/complexSearch?number=12&query=${query}&apiKey=${process.env.REACT_APP_RECIPE_API}`;
        const api = await fetch(url);
        const data = await api.json();
        setSearch(data.results);
      };
      getSearch();
    }, 1500);
    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  return (
    <header className="py-3 flex justify-between items-center">
      <Link to="/" className="flex items-center space-x-1 w-[40%] ">
        <GiFullPizza className="text-2xl text-green-600" />
        <p className="font-bold text-green-900">Navid Recipe</p>
      </Link>
      <div className="w-[60%] md:w-[40%] relative">
        <div className=" px-3 py-2 rounded-md flex items-center justify-between bg-slate-200">
          <input
            className="outline-none bg-transparent w-[90%] md:w-auto"
            type="text"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
          <BsSearch className="text-green-900 w-[10%] md:w-auto" />
        </div>
        {query && (
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white absolute z-10 w-full shadow-lg mt-1 rounded-lg max-h-64 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-100"
          >
            {search && (
              <div>
                {search.map((searchItem) => (
                  <Link
                    to={`detail/${searchItem.id}`}
                    className="flex items-center px-4 py-2 space-x-2 border-b hover:bg-green-100"
                    key={searchItem.id}
                    onClick={() => setQuery("")}
                  >
                    <img
                      className="w-8 h-8 rounded-full object-cover"
                      src={searchItem.image}
                      alt={searchItem.title}
                    />
                    <p className="truncate">{searchItem.title}</p>
                  </Link>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
