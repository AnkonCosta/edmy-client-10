import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoaading] = useState(true)

    //1. create user with email and password
    const createUser = (email, password) => {
        setLoaading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };

    //2. login with email and password 

    const signIn = (email, password) => {
        setLoaading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    //3. logOut from the website 
    const logOut = () => {
        setLoaading(true)
        return signOut(auth);
    }

    // 4.Google login 
    const googleProviderLogin = (provider) => {
        setLoaading(true)
        return signInWithPopup(auth, provider);

    }

    const FacebookProviderLogin = (provider) => {
        setLoaading(true)
        return signInWithPopup(auth, provider)
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoaading(false)
        });
        return () => unsubscribe();
    }, [])





    const authInfo = { user, createUser, logOut, signIn, loading, googleProviderLogin, FacebookProviderLogin, setLoaading }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;