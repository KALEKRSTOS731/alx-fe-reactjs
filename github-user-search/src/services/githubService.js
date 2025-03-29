import axios from "axios";

const BASE_URL = "https://api.github.com/search/users?q=";

export const fetchUserData = async (username, location, minRepos) => {
  try {
    let query = `${username}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>${minRepos}`;

    const response = await axios.get(`${BASE_URL}${query}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
      },
    });

    if (response.data.items.length > 0) {
      const user = response.data.items[0];
      const userDetails = await axios.get(user.url, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
        },
      });
      return userDetails.data;
    }
    return null;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};


