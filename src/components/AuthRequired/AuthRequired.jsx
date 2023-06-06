import React, { useLocation, Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../../context/AuthContext';

export function AuthRequired () {
    const { isLoggedIn } = useAuth();
    const location = useLocation();
    
    return isLoggedIn ? <Outlet /> : <Navigate to='/sign-in' state={{ from: location }} replace />;
}
  
