import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    //1. create user with email and password
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };

    //2. login with email and password 

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    //3. logOut from the website 
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    // 4.Google login 
    const googleProviderLogin = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider);

    }

    // updateuserprofile 
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)

    }

    const FacebookProviderLogin = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        });
        return () => unsubscribe();
    }, [])





    const authInfo = { user, createUser, logOut, signIn, loading, setLoading, googleProviderLogin, FacebookProviderLogin, updateUserProfile }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;