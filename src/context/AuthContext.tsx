import {createContext, useContext, useState, useEffect} from 'react';
import supabase from '../services/supabase';
import {toast} from 'react-hot-toast';

type User = { id: string; email: string } | null;
type AuthContextType = {
    user: User;
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string) => Promise<void>;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({children}: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User>(null);

    // Oturum durumunu izle (Supabase'in yerel yöntemi)
    useEffect(() => {
        const {data: authListener} = supabase.auth.onAuthStateChange(
            (_, session) => {
                setUser(session?.user ? {id: session.user.id, email: session.user.email ?? ''} : null);
            }
        );

        return () => authListener.subscription.unsubscribe();
    }, []);

    // Giriş Yap
    const login = async (email: string, password: string) => {
        const {error} = await supabase.auth.signInWithPassword({email, password});
        if (error) {
            toast.error('Giriş başarısız!');
            throw error;
        }
    };

    // Kayıt Ol
    const register = async (email: string, password: string) => {
        const {error} = await supabase.auth.signUp({email, password});
        if (error) {
            toast.error('Kayıt başarısız!');
            throw error;
        }
        toast.success('Kayıt başarılı! Lütfen giriş yapın.');
    };

    // Çıkış Yap
    const logout = async () => {
        const {error} = await supabase.auth.signOut();
        if (error) {
            toast.error('Çıkış yapılamadı!');
            throw error;
        }
        toast.success('Çıkış yapıldı!');
    };

    return (
        <AuthContext.Provider value={{user, login, register, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);