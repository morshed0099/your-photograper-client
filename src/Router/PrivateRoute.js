import { Spinner } from 'flowbite-react';
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { userAuth } from '../AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const location=useLocation()
    const {user,loader}=useContext(userAuth)
 
    if(loader){
      return  (<div className="text-center">
      <Spinner aria-label="Center-aligned spinner example" />
    </div>)
    }
    if(!user?.email){
       return <Navigate to='/login' state={{from:location}} replace></Navigate>
    }else
    { return children;}
    
   
};

export default PrivateRoute;