import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {AuthProvider} from './context/AuthContext';
import {RecipeProvider} from './context/RecipeContext';
import PrivateRoute from './components/Layout/PrivateRoute';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/auth/LoginPage';
import HomePage from './pages/recipes/HomePage';
import RegisterPage from "./pages/auth/RegisterPage.tsx";
import AddRecipe from "./pages/recipes/AddRecipe.tsx";
import RecipeDetail from "./pages/recipes/RecipeDetail.tsx";

function App() {

    return (
        <AuthProvider>
            <RecipeProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<LandingPage/>}/>
                        <Route path="/login" element={<LoginPage/>}/>
                        <Route path="/register" element={<RegisterPage/>}/>

                        {/* Protected Routes */}
                        <Route element={<PrivateRoute/>}>
                            <Route path="/home" element={<HomePage/>}/>
                            <Route path="/add-recipe" element={<AddRecipe/>}/>
                            <Route path="/recipe/:id" element={<RecipeDetail/>}/>
                        </Route>
                    </Routes>
                </Router>
            </RecipeProvider>
        </AuthProvider>
    );
}

export default App
