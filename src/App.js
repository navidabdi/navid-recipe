import { useEffect, useState } from "react";
import { RecipeCard } from "./components";

const App = () => {
  const getRecipes = async () => {
    const localData = localStorage.getItem("random");

    if (localData) {
      setRecipes(JSON.parse(localData));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?number=12&apiKey=${process.env.REACT_APP_RECIPE_API}`,
      );
      const data = await api.json();
      localStorage.setItem("random", JSON.stringify(data.recipes));
      setRecipes(data.recipes);
      console.log(data.recipes);
    }
  };

  useEffect(() => {
    getRecipes();
  }, []);

  const [recipes, setRecipes] = useState({});

  return (
    <div className="App">
      <h1>Hello React!</h1>
      <RecipeCard recipes={recipes} />
      {console.log(recipes)}
    </div>
  );
};

export default App;
