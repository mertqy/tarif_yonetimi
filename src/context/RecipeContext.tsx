import {createContext, useContext, useState} from 'react';
import Recipe from '../types/recipe';

type RecipeContextType = {
    recipes: Recipe[];
    addRecipe: (recipe: Recipe) => void;
};

const RecipeContext = createContext<RecipeContextType>({} as RecipeContextType);

export const RecipeProvider = ({children}: { children: React.ReactNode }) => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);

    const addRecipe = (recipe: Recipe) => {
        setRecipes([...recipes, recipe]);
    };

    return (
        <RecipeContext.Provider value={{recipes, addRecipe}}>
            {children}
        </RecipeContext.Provider>
    );
};

export const useRecipes = () => useContext(RecipeContext);