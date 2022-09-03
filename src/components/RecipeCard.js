const RecipeCard = ({ recipes }) => {
  return (
    <div>
      {/* {console.log(recipes)} */}
      {recipes.length > 0
        ? recipes.map((recipe) => (
            <article key={recipe.id}>
              <img src={recipe.image} alt="" />
            </article>
          ))
        : ""}
    </div>
  );
};

export default RecipeCard;
