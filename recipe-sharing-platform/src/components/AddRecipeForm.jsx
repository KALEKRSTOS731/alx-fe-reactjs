// src/components/AddRecipeForm.jsx
import React, { useState } from 'react';
import './AddRecipeForm.css'; // Import the CSS file

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
        <div className="form-container">
            <form onSubmit={handleSubmit} className="recipe-form">
                <h2>Add a New Recipe</h2>

                {/* Recipe Title */}
                <div className="form-group">
                    <label htmlFor="recipe-title">Recipe Title:</label>
                    <input
                        type="text"
                        id="recipe-title"
                        value={recipeTitle}
                        onChange={(e) => setRecipeTitle(e.target.value)}
                    />
                    {errors.recipeTitle && <p className="error">{errors.recipeTitle}</p>}
                </div>

                {/* Ingredients */}
                <div className="form-group">
                    <label htmlFor="ingredients">Ingredients:</label>
                    <textarea
                        id="ingredients"
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        rows="10"
                        cols="50"
                    />
                    {errors.ingredients && <p className="error">{errors.ingredients}</p>}
                </div>

                {/* Preparation Steps */}
                <div className="form-group">
                    <label htmlFor="preparation-steps">Preparation Steps:</label>
                    <textarea
                        id="preparation-steps"
                        value={preparationSteps}
                        onChange={(e) => setPreparationSteps(e.target.value)}
                        rows="10"
                        cols="50"
                    />
                    {errors.preparationSteps && <p className="error">{errors.preparationSteps}</p>}
                </div>

                {/* Submit Button */}
                <button type="submit" className="submit-button">Submit Recipe</button>
            </form>
        </div>
    );
};

export default AddRecipeForm;
