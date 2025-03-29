import { useState, useEffect } from "react";
import { fetchGitHubUser } from "../services/api";

const GitHubProfile = ({ username }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchGitHubUser(username).then((data) => setUser(data));
  }, [username]);

  return user ? (
    <div>
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <img src={user.avatar_url} alt={user.name} width={100} />
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default GitHubProfile;

