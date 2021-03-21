import { apiUrl } from "../Pages/utils/constants";

export async function getCategories() {
  const data = await fetch(`${apiUrl}/categories`);
  return await data.json();
}

export async function getJokesByCategory(category) {
  const data = await fetch(`${apiUrl}/joke/${category}?blacklistFlags=nsfw,racist,sexist,explicit`);
  return await data.json();
}
