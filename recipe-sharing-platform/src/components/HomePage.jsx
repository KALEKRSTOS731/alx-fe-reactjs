import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error('Error loading recipes:', error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Welcome to the Home Page
        </h1>
        <p className="text-lg text-center text-gray-600 mb-12">
          Here are some delicious recipes for you to try:
        </p>

        {/* Recipe Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              {/* Recipe Image */}
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-48 object-cover"
              />

              {/* Recipe Content */}
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {recipe.name}
                </h2>
                <p className="text-gray-600">{recipe.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
