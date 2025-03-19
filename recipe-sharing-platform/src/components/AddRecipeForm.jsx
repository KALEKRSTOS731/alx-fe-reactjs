// src/components/AddRecipeForm.js
import React, { useState } from 'react';

const AddRecipeForm = () => {
    // State to manage form inputs
    const [recipeTitle, setRecipeTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [preparationSteps, setPreparationSteps] = useState('');

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        // Log the form data (you can replace this with an API call or other logic)
        console.log({
            recipeTitle,
            ingredients,
            preparationSteps,
        });

        // Clear the form after submission
        setRecipeTitle('');
        setIngredients('');
        setPreparationSteps('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add a New Recipe</h2>

            {/* Recipe Title */}
            <div>
                <label htmlFor="recipe-title">Recipe Title:</label>
                <input
                    type="text"
                    id="recipe-title"
                    value={recipeTitle}
                    onChange={(e) => setRecipeTitle(e.target.value)}
                    required
                />
            </div>

            {/* Ingredients */}
            <div>
                <label htmlFor="ingredients">Ingredients:</label>
                <textarea
                    id="ingredients"
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    rows="10"
                    cols="50"
                    required
                />
            </div>

            {/* Preparation Steps */}
            <div>
                <label htmlFor="preparation-steps">Preparation Steps:</label>
                <textarea
                    id="preparation-steps"
                    value={preparationSteps}
                    onChange={(e) => setPreparationSteps(e.target.value)}
                    rows="10"
                    cols="50"
                    required
                />
            </div>

            {/* Submit Button */}
            <button type="submit">Submit Recipe</button>
        </form>
    );
};

export default AddRecipeForm;
