import axios from "axios";
import { useState, useEffect } from "react";

const useRecipe = ({ tag = "vegetarian" }) => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const localData = localStorage.getItem("random");
  const url = `https://api.spoonacular.com/recipes/random?number=30&tags=${tag}&apiKey=${process.env.REACT_APP_RECIPE_API}`;

  useEffect(() => {
    const fetchRecipes = async () => {
      if (localData) {
        setRecipes(JSON.parse(localData));
        setIsLoading(false);
      } else {
        setIsLoading(true);
        const { data } = await axios.get(url);
        localStorage.setItem("random", JSON.stringify(data.recipes));
        setRecipes(data);
        setIsLoading(false);
        console.log(data.recipes);
      }
    };
    fetchRecipes();
  }, []);

  return { recipes, isLoading };
};

export default useRecipe;
