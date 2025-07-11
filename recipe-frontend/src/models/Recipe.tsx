export interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string;
  cuisineType: string;
  preparationTime: number;
  status: string;
}
