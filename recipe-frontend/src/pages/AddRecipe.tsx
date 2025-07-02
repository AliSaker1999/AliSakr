import { useState } from "react";
import { createRecipe } from "../services/RecipeService";

const AddRecipe = () => {
  const [form, setForm] = useState({
    name: "",
    ingredients: "",
    instructions: "",
    cuisineType: "",
    preparationTime: 0,
    status: "to try",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: name === "preparationTime" ? Number(value) : value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const recipe = {
      ...form,
      ingredients: form.ingredients.split(",").map((s) => s.trim()),
    };
    await createRecipe(recipe);
    alert("Recipe added!");
    setForm({
      name: "",
      ingredients: "",
      instructions: "",
      cuisineType: "",
      preparationTime: 0,
      status: "to try",
    });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Add New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="w-full border p-2 rounded" required />
        <input name="cuisineType" value={form.cuisineType} onChange={handleChange} placeholder="Cuisine Type" className="w-full border p-2 rounded" required />
        <input name="preparationTime" type="number" value={form.preparationTime} onChange={handleChange} placeholder="Preparation Time (min)" className="w-full border p-2 rounded" required />
        <select name="status" value={form.status} onChange={handleChange} className="w-full border p-2 rounded">
          <option value="to try">To Try</option>
          <option value="favorite">Favorite</option>
          <option value="made before">Made Before</option>
        </select>
        <input name="ingredients" value={form.ingredients} onChange={handleChange} placeholder="Ingredients (comma-separated)" className="w-full border p-2 rounded" required />
        <textarea name="instructions" value={form.instructions} onChange={handleChange} placeholder="Instructions" className="w-full border p-2 rounded" rows={4} required />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Add Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipe;
