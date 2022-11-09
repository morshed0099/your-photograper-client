import React, { createContext, useState } from 'react';

export const userAuth=createContext()
const AuthProvider = ({children}) => {
    const [user,setUser]=useState('')
    const [loader,setLoader]=useState(true)
    const authInfo={
        user
    }
    return (
       <div>
         <userAuth.Provider value={authInfo}>
           {children}
         </userAuth.Provider>
       </div>
    );
};

export default AuthProvider;