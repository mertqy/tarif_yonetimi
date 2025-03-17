import {useParams} from 'react-router-dom';
import {useRecipes} from '../../context/RecipeContext';

const RecipeDetail = () => {
    const {id} = useParams();
    const {recipes} = useRecipes();
    const recipe = recipes.find((r) => r.id === id);

    if (!recipe) {
        return <div className="text-[#E0E0E0]">Tarif bulunamadı!</div>;
    }

    return (
        <div className="min-h-screen bg-[#121212] p-8">
            <h1 className="text-3xl font-bold text-[#E0E0E0] mb-8">{recipe.title}</h1>
            <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-64 object-cover mb-8 rounded"
            />
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#E0E0E0]">Malzemeler</h2>
                <ul className="list-disc list-inside text-[#E0E0E0]">
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
                <h2 className="text-2xl font-bold text-[#E0E0E0]">Hazırlanışı</h2>
                <p className="text-[#E0E0E0]">{recipe.instructions}</p>
            </div>
        </div>
    );
};

export default RecipeDetail;