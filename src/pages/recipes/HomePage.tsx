import {useRecipes} from '../../context/RecipeContext';
import RecipeCard from '../../components/recipes/RecipeCard';
import useAuthBypass from '../../hooks/useAuth.tsx';
import Navbar from "../../components/Layout/Navbar.tsx";

const HomePage = () => {
    const {user} = useAuthBypass();
    const {recipes} = useRecipes();

    return (
        <div className="bg-[#121212] ">
            <div className="h4">
                <Navbar/>
            </div>
            <div className="min-h-screen p-8">
                <h1 className="text-3xl font-bold text-[#E0E0E0] mb-8">Hoş geldin, {user?.email}!</h1>
                <h1 className="text-3xl font-bold text-[#E0E0E0] mb-8">Tüm Tarifler</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {recipes.map((recipe) => (
                        <RecipeCard key={recipe.id} recipe={recipe}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomePage;