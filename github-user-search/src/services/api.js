const GITHUB_API_URL = "https://api.github.com";
const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const fetchGitHubUser = async (username) => {
  try {
    const response = await fetch(`${GITHUB_API_URL}/users/${username}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch GitHub user");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching GitHub user:", error);
    return null;
  }
};
