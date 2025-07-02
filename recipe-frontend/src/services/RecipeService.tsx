import axios from "axios";
import { Recipe } from "../models/Recipe";
import { CreateRecipeDto } from "../models/CreateRecipeDto";

const API_URL = "http://localhost:5196/api/recipes"; // or your port

export const getAllRecipes = async (): Promise<Recipe[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createRecipe = async (recipe: CreateRecipeDto): Promise<Recipe> => {
  const response = await axios.post(API_URL, recipe);
  return response.data;
};
export const deleteRecipe = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
export const updateRecipeStatus = async (id: number, status: string): Promise<void> => {
  await axios.patch(`${API_URL}/${id}/status?status=${status}`);
};
export const searchRecipes = async (query: string): Promise<Recipe[]> => {
  const response = await axios.get(`${API_URL}/search?query=${query}`);
  return response.data;
};
