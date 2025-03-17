import useAuthBypass from '../../hooks/useAuth.tsx';
import {Navigate, Outlet} from 'react-router-dom';

const PrivateRoute = () => {
    const {user} = useAuthBypass();
    return user ? <Outlet/> : <Navigate to="/login" replace/>;
};

export default PrivateRoute;