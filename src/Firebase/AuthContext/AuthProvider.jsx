import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Config file/_firebase.init';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser =(email, password)=> {
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password);
    }
    const SignInUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signOutFunction = ()=>{
        setLoading(true)
       return signOut(auth)
    }

    const updateUser = (updatedData)=>{
        updateProfile(auth.currentUser, updatedData)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (CurrentUser)=>{
            setUser(CurrentUser);
            setLoading(false)
        })
        return unsubscribe;
    },[])

    const appinfo = {
        user,
        setUser,
        createUser,
        signOutFunction,
        SignInUser,
        loading,
        setLoading,
        updateUser
    }
    return <AuthContext value={appinfo}>
        {children}
    </AuthContext>
};

export default AuthProvider;