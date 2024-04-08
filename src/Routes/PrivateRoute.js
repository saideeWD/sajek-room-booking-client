import React, { useContext } from 'react';
import { UserContaxt } from '../App';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContaxt);
    let location = useLocation();
if(!loggedInUser.email){
    return <Navigate to="/login" state={{ from: location }} replace />;

}

    return children;
};

export default PrivateRoute;