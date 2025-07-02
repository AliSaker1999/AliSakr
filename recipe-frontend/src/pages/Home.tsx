import { useEffect, useState } from "react";
import { Recipe } from "../models/Recipe";
import {
  getAllRecipes,
  deleteRecipe,
  updateRecipeStatus,
  searchRecipes,
} from "../services/RecipeService";

const Home = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestedRecipe, setSuggestedRecipe] = useState<Recipe | null>(null);

  const fetchRecipes = async () => {
    const data = await getAllRecipes();
    setRecipes(data);
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      await deleteRecipe(id);
      fetchRecipes();
    }
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return fetchRecipes();

    const results = await searchRecipes(searchQuery.trim());
    setRecipes(results);
  };

  const handleSuggest = () => {
    if (recipes.length === 0) return;
    const random = recipes[Math.floor(Math.random() * recipes.length)];
    setSuggestedRecipe(random);
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
          <h1 className="text-4xl font-bold text-gray-800">🍽️ All Recipes</h1>
          <a
            href="/create"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            + New Recipe
          </a>
        </div>

        {/* Search + Suggest */}
        <form onSubmit={handleSearch} className="flex flex-wrap gap-3 mb-6">
          <input
            type="text"
            placeholder="Search by name, ingredient, cuisine..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 border px-4 py-2 rounded shadow-sm"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Search
          </button>
          <button
            type="button"
            onClick={handleSuggest}
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
          >
            🎲 Suggest One
          </button>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              fetchRecipes();
              setSuggestedRecipe(null);
            }}
            className="text-sm text-gray-600 hover:underline"
          >
            Reset
          </button>
        </form>

        {/* Suggested Recipe */}
        {suggestedRecipe && (
          <div className="mb-6 p-4 bg-yellow-100 border border-yellow-400 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-1">🔮 Suggested Recipe:</h2>
            <p className="font-semibold text-indigo-700">{suggestedRecipe.name}</p>
          </div>
        )}

        {/* Recipe Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {recipes.map((r) => (
            <div
              key={r.id}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition relative"
            >
              <button
                onClick={() => handleDelete(r.id)}
                className="absolute top-2 right-2 bg-red-100 text-red-600 px-2 py-1 rounded hover:bg-red-200 text-sm"
              >
                Delete
              </button>

              <h2 className="text-2xl font-semibold text-indigo-600 mb-2">{r.name}</h2>

              <div className="text-gray-700 space-y-1">
                <p>
                  <span className="font-medium">Cuisine:</span> {r.cuisineType}
                </p>
                <p>
                  <span className="font-medium">Prep Time:</span> {r.preparationTime} min
                </p>
                <div>
                  <label className="font-medium mr-2">Status:</label>
                  <select
                    value={r.status}
                    onChange={async (e) => {
                      const newStatus = e.target.value;
                      await updateRecipeStatus(r.id, newStatus);
                      fetchRecipes();
                    }}
                    className="border px-2 py-1 rounded text-sm bg-white"
                  >
                    <option value="to try">To Try</option>
                    <option value="favorite">Favorite</option>
                    <option value="made before">Made Before</option>
                  </select>
                </div>
                <p>
                  <span className="font-medium">Ingredients:</span>{" "}
                  {r.ingredients.join(", ")}
                </p>
                <p>
                  <span className="font-medium">Instructions:</span> {r.instructions}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
