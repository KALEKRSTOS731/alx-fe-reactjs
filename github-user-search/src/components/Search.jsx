import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;
    
    setLoading(true);
    setError("");
    setUserData(null);
    
    const data = await fetchUserData(username);
    setLoading(false);
    
    if (data) {
      setUserData(data);
    } else {
      setError("Looks like we cant find the user");
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-center">GitHub User Search</h2>
        <input
          type="text"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Enter location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          placeholder="Minimum repositories..."
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full p-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Search</button>
      </form>
      
      {loading && <p className="mt-4 text-blue-500">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}
      
      {userData && (
        <div className="bg-white p-6 mt-6 rounded-lg shadow-md text-center w-full max-w-md">
          <img src={userData.avatar_url} alt={userData.login} className="w-24 h-24 rounded-full mx-auto mb-4" />
          <h3 className="text-lg font-semibold">{userData.login}</h3>
          <p className="text-gray-600">Location: {userData.location || "Not available"}</p>
          <p className="text-gray-600">Repositories: {userData.public_repos}</p>
          {userData.repos && (
            <div className="mt-4 text-left">
              <h4 className="text-md font-semibold">Repositories:</h4>
              <ul className="list-disc pl-5">
                {userData.repos.map((repo) => (
                  <li key={repo.id} className="text-gray-600">
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                      {repo.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
