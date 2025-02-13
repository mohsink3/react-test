import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface Recipe {
    name: string;
    cuisine: string;
    Ingredients: string;
    CookingTime: number;
}

const RecipeDetails = () => {
    const [recipe, setRecipe] = useState<Recipe | null>(null);
    const { id } = useParams<{ id: string }>();



    const fetchRecipedetails = async () => {
        const response = await fetch(`https://dummyjson.com/recipes/${id}`);
        const data = await response.json();
        setRecipe(data);
    };
    useEffect(() => {
        fetchRecipedetails();
    },[id]);

        if(recipe == null){
            return <h2>no data </h2>
        }else{
            data = response.json()
        }

    return (
        <div className="container mt-4">  
                                <div className="card-body">
                                    <h5 className="card-title">{recipe.name}</h5>
                                    <p className="card-text">{recipe.prepTime}</p>
                                    <p className="card-text">{recipe.cuisine}</p>

                                </div>
                            </div>
                        
                    
            
        

    );

}
export default RecipeDetails;
