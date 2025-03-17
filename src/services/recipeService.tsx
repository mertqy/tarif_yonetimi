import supabase from './supabase';
import Recipe from '../types/recipe';

export const getRecipes = async (): Promise<Recipe[]> => {
    const {data, error} = await supabase
        .from('recipes')
        .select('*');

    if (error) throw new Error(error.message);
    return data;
};

export const createRecipe = async (recipe: Omit<Recipe, 'id'>): Promise<Recipe> => {
    const {data, error} = await supabase
        .from('recipes')
        .insert(recipe)
        .select()
        .single();

    if (error) throw new Error(error.message);
    return data;
};