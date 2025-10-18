import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Config file/_firebase.init';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const createUser =(email, password)=> {
       return createUserWithEmailAndPassword(auth, email, password);
    }
    const SignInUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signOutFunction = ()=>{
       return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (CurrentUser)=>{
            setUser(CurrentUser);
        })
        return unsubscribe;
    },[])

    const appinfo = {
        user,
        setUser,
        createUser,
        signOutFunction,
        SignInUser
    }
    return <AuthContext value={appinfo}>
        {children}
    </AuthContext>
};

export default AuthProvider;