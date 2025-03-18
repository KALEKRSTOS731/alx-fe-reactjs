import React, { useState, useEffect } from 'react';
import './HomePage.css';

const HomePage = () => {
  // State to hold the recipe data
  const [recipes, setRecipes] = useState([]);

  // useEffect to load the data when the component mounts
  useEffect(() => {
    // Fetch the data from the data.json file
    fetch('/data.json')
      .then((response) => response.json()) // Parse the JSON data
      .then((data) => setRecipes(data)) // Set the data to state
      .catch((error) => console.error('Error loading recipes:', error)); // Handle errors
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="home-page">
      <h1>Welcome to the Home Page</h1>
      <p>Here are some delicious recipes:</p>

      {/* Display the recipes */}
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <h2>{recipe.name}</h2>
            <h3>Ingredients:</h3>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <h3>Instructions:</h3>
            <p>{recipe.instructions}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
