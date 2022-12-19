import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'

const auth=getAuth(app)
const googleAuth=new GoogleAuthProvider()
export const userAuth=createContext()
const AuthProvider = ({children}) => {

    const [user,setUser]=useState('')
    const [loader,setLoader]=useState(true)
    
    const createUserEmail=(email,password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginWithEmail=(email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const loginWithGoolgle=()=>{
        setLoader(true)
        return signInWithPopup(auth,googleAuth)
    }
    const logout=()=>{ 
        localStorage.removeItem('token');
        return signOut(auth)
    }
    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoader(false)
            
        });
        return () => unsubcribe();

    }, [])
  
    const authInfo={
        user,
        createUserEmail,
        loginWithEmail,
        loginWithGoolgle,
        logout,
        loader,
        setLoader
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