import React, { useState } from 'react';

const RecipeApp = () => {
  const [recipe1, setRecipe1] = useState(null);
  const [recipe2, setRecipe2] = useState(null);

  const fetchRecipe1 = () => { 
    setRecipe1("Recipe 1: Spaghetti Carbonara");
  };

  const fetchRecipe2 = () => {

    setRecipe2("Recipe 2: Chicken Tikka Masala");
  };

  return (
    <div>
      <button onClick={fetchRecipe1}>Get Recipe 1</button>
      <button onClick={fetchRecipe2}>Get Recipe 2</button>
      <div>
        {recipe1 && <p>{recipe1}</p>}
        {recipe2 && <p>{recipe2}</p>}
      </div>
    </div>
  );
};

export default RecipeApp;