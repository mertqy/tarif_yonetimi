type Recipe = {
    id: string; // Tarifin benzersiz kimliği
    title: string; // Tarifin başlığı
    description?: string; // Tarifin kısa açıklaması (opsiyonel)
    ingredients: string[]; // Malzemeler listesi
    instructions: string[]; // Hazırlanış adımları
    cookingTime: number; // Pişirme süresi (dakika cinsinden)
    difficulty: 'easy' | 'medium' | 'hard'; // Zorluk seviyesi
    category: 'yemek' | 'tatlı' | 'içecek'; // Tarif kategorisi
    image?: string; // Tarif görseli (opsiyonel)
    createdAt?: string; // Tarifin oluşturulma tarihi (opsiyonel)
    updatedAt?: string; // Tarifin güncellenme tarihi (opsiyonel)
};

export default Recipe;