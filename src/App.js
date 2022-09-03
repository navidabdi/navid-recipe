import { useEffect, useState } from "react";
import { RecipeCard, RecipeSlider, Header } from "./components";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  // const data = useRecipe();

  useEffect(() => {
    const getRandomRecipe = async () => {
      const localData = localStorage.getItem("random");

      const url = `https://api.spoonacular.com/recipes/random?number=12&apiKey=${process.env.REACT_APP_RECIPE_API}`;

      if (localData) {
        setRecipes(JSON.parse(localData));
      } else {
        const api = await fetch(url);
        const data = await api.json();
        localStorage.setItem("random", JSON.stringify(data.recipes));
        console.log(data.recipes);
        setRecipes(data.recipes);
      }
    };
    getRandomRecipe();
  }, []);

  return (
    <div className="App">
      <Header />
      <RecipeSlider recipes={recipes} />
      <RecipeCard recipes={recipes} />
    </div>
  );
};

export default App;
