// src/components/AddRecipeForm.jsx
import React, { useState } from 'react';

const AddRecipeForm = () => {
    // State to manage form inputs
    const [recipeTitle, setRecipeTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [preparationSteps, setPreparationSteps] = useState('');

    // State to manage errors
    const [errors, setErrors] = useState({
        recipeTitle: '',
        ingredients: '',
        preparationSteps: '',
    });

    // Validate the form inputs
    const validate = () => {
        const newErrors = {
            recipeTitle: '',
            ingredients: '',
            preparationSteps: '',
        };

        let isValid = true;

        // Validate Recipe Title
        if (!recipeTitle.trim()) {
            newErrors.recipeTitle = 'Recipe title is required.';
            isValid = false;
        }

        // Validate Ingredients
        if (!ingredients.trim()) {
            newErrors.ingredients = 'Ingredients are required.';
            isValid = false;
        }

        // Validate Preparation Steps
        if (!preparationSteps.trim()) {
            newErrors.preparationSteps = 'Preparation steps are required.';
            isValid = false;
        }

        // Update the errors state
        setErrors(newErrors);

        // Return whether the form is valid
        return isValid;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        // Validate the form
        if (validate()) {
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
            setErrors({
                recipeTitle: '',
                ingredients: '',
                preparationSteps: '',
            });
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md" // Tailwind classes for container
        >
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Add a New Recipe</h2>

            {/* Recipe Title */}
            <div className="mb-4">
                <label htmlFor="recipe-title" className="block text-sm font-medium text-gray-700">
                    Recipe Title:
                </label>
                <input
                    type="text"
                    id="recipe-title"
                    value={recipeTitle}
                    onChange={(e) => setRecipeTitle(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
                {errors.recipeTitle && (
                    <p className="text-sm text-red-500 mt-1">{errors.recipeTitle}</p>
                )}
            </div>

            {/* Ingredients */}
            <div className="mb-4">
                <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">
                    Ingredients:
                </label>
                <textarea
                    id="ingredients"
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    rows="5"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
                {errors.ingredients && (
                    <p className="text-sm text-red-500 mt-1">{errors.ingredients}</p>
                )}
            </div>

            {/* Preparation Steps */}
            <div className="mb-6">
                <label htmlFor="preparation-steps" className="block text-sm font-medium text-gray-700">
                    Preparation Steps:
                </label>
                <textarea
                    id="preparation-steps"
                    value={preparationSteps}
                    onChange={(e) => setPreparationSteps(e.target.value)}
                    rows="5"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
                {errors.preparationSteps && (
                    <p className="text-sm text-red-500 mt-1">{errors.preparationSteps}</p>
                )}
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full px-4 py-2 bg-green-600 text-white font-semibold rounded-md shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
                Submit Recipe
            </button>
        </form>
    );
};

export default AddRecipeForm;
