import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch('/data.json');
        const data = await response.json();
        const selectedRecipe = data.find(recipe => recipe.id === parseInt(id));
        setRecipe(selectedRecipe);
      } catch (error) {
        console.error('Error fetching recipe:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

 return (
    <div className="container mx-auto px-4 py-8">
      {/* Recipe Title and Image */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{recipe.name}</h1>
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Ingredients Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Ingredients</h2>
        <ul className="list-disc list-inside space-y-2">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-600">
              {ingredient}
            </li>
          ))}
        </ul>
      </div>

      {/* Instructions Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Instructions</h2>
        <p className="text-gray-600 whitespace-pre-line">{recipe.instructions}</p>
      </div>
    </div>
  );
};

export default RecipeDetail;
