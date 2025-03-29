import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState("");
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
      setError("Looks like we can't find the user");
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>
      
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      
      {userData && (
        <div className="user-profile">
          <img src={userData.avatar_url} alt={userData.login} className="user-avatar" />
          <h3>{userData.login}</h3>
        </div>
      )}
    </div>
  );
};

export default Search;
