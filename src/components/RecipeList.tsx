import { useState, useEffect } from "react";

interface Recipe {
    name: string;
    cuisine: string;
    prepTime: string;
    image: string;
}

const RecipeList = () => {
    const [recipes, SetRecipes] = useState<Recipe[]>([]);



    const fetchRecipe = async () => {
        const response = await fetch("https://dummyjson.com/recipe");
        const data = await response.json();
        SetRecipes(data.recipes);
    };
    useEffect(() => {
        fetchRecipe();
    });

    return (
        <div className="container mt-5">
            <div className="row cols-cols row-cols-md-3">
                {
                    recipes.map((recipe, index) => (
                        <div className="col">
                            <div key={index}>
                                <img src={recipe.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{recipe.name}</h5>
                                    <p className="card-text">{recipe.prepTime}</p>
                                    <p className="card-text">{recipe.cuisine}</p>

                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>

    );

}
export default RecipeList;
