import Recipe from '../../types/recipe';

const RecipeCard = ({recipe}: { recipe: Recipe }) => {
    return (
        <div className="bg-[#1E1E1E] p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="text-xl font-bold text-[#E0E0E0]">{recipe.title}</h3>
            <p className="text-[#90CAF9]">{recipe.cookingTime} dakika</p>
        </div>
    );
};

export default RecipeCard;