// src/pages/LandingPage.tsx
import {Link} from 'react-router-dom';
import {BeakerIcon, BookOpenIcon, CakeIcon} from '@heroicons/react/24/outline';

const LandingPage = () => {

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Navigation */}
            <nav className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <BeakerIcon className="h-8 w-8 text-blue-600"/>
                        <span className="text-2xl font-bold text-gray-800">TarifDefteri</span>
                    </div>
                    <div className="space-x-4">
                        <Link to="/login" className="text-gray-600 hover:text-blue-600">
                            Giriş Yap
                        </Link>
                        <Link
                            to="/register"
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                        >
                            Ücretsiz Kaydol
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-4 py-20 text-center">
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                    Dünyanın En Lezzetli Tarifleri Burada!
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                    Yemek, tatlı ve içecek tariflerini keşfedin, kendi tariflerinizi paylaşın.
                </p>

                <div className="flex justify-center space-x-4 mb-16">
                    <Link
                        to="/register"
                        className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700"
                    >
                        Hemen Başla
                    </Link>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-8 mt-20">
                    <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                        <BookOpenIcon className="h-12 w-12 text-blue-600 mx-auto mb-4"/>
                        <h3 className="text-xl font-semibold mb-2">Binlerce Tarif</h3>
                        <p className="text-gray-600">Her gün yeni tarifler ekleniyor</p>
                    </div>

                    <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                        <CakeIcon className="h-12 w-12 text-blue-600 mx-auto mb-4"/>
                        <h3 className="text-xl font-semibold mb-2">Kategoriler</h3>
                        <p className="text-gray-600">Yemek, tatlı, içecek ve daha fazlası</p>
                    </div>

                    <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                        <BeakerIcon className="h-12 w-12 text-blue-600 mx-auto mb-4"/>
                        <h3 className="text-xl font-semibold mb-2">Kolay Yönetim</h3>
                        <p className="text-gray-600">Tariflerini kolayca düzenle</p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-8 mt-20 bottom-0 w-full absolute">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p>© 2024 TarifDefteri. Tüm hakları saklıdır.</p>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;