// hooks/useAuthBypass.tsx
import {useAuth} from '../context/AuthContext';

// Bypass'ı tamamen kaldır, doğrudan useAuth döndür
const useAuthBypass = () => {
    return useAuth();
};

export default useAuthBypass;