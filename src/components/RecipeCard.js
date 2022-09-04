import { GiEmptyHourglass } from "react-icons/gi";
import { FaHeartbeat } from "react-icons/fa";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const RecipeCard = ({ recipes }) => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="con my-3 grid overflow-hidden grid-cols-2 auto-rows-auto gap-4 grid-flow-row md:grid-cols-4"
    >
      {recipes.length > 0
        ? recipes.map((recipe) => (
            <Link to={`detail/${recipe.id}`} key={recipe.id}>
              <article className=" rounded-xl overflow-hidden bg-white">
                <img
                  className="w-full h-[110px] md:h-[200px] object-cover"
                  src={recipe.image}
                  alt={recipe.title}
                />
                <div className="py-4 px-3 md:p-5">
                  <ul className="flex items-center gap-3 mb-1 md:mb-2">
                    <li className="flex gap-1 items-center text-sm md:text-md">
                      <GiEmptyHourglass className="text-green-700" />
                      <p>{recipe.readyInMinutes}</p>
                    </li>
                    <li className="flex gap-1 items-center text-sm md:text-md">
                      <FaHeartbeat className="text-green-700" />
                      <p>{recipe.healthScore}</p>
                    </li>
                  </ul>
                  <h3 className="text-sm truncate md:text-md">
                    {recipe.title}
                  </h3>
                </div>
              </article>
            </Link>
          ))
        : ""}
    </motion.div>
  );
};

export default RecipeCard;
