import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

interface Recipe {
    name: string;
    cuisine: string;
    ingredients: string[];
    cookTimeMinutes: number;
    image: string;
    instructions: string[];
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
    }, [id]);

    if (recipe == null) {
        return <h2>no data </h2>
    }

    return (
        <div className="container mt-4">
            <div className="card-body">
                <h5 className="card-title">{recipe.name}</h5>
                <h4 className="card-subtitle mb-2 text-muted">{recipe.cuisine}</h4>
                <p className="card-text"><strong>Cook Time:</strong> {recipe.cookTimeMinutes} minutes</p>
                <h5 className="text-warning">Ingredients:</h5>
                <ul className="list-group list-group-flush">
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index} className="list-group-item">{ingredient}</li>
                    ))}
                </ul>
                <h5 className="mt-4 text-warning">Instructions</h5>
                <ol className="list-group list-group-numbered">
                    {recipe.instructions.map((instruction, index) => (
                        <li key={index} className="list-group-item">{instruction}</li>
                    ))}
                </ol>
                <Link to="/recipes" className="btn btn-primary mt-4">← Back to Recipe List</Link>

            </div>
        </div>

    );

}
export default RecipeDetails;
