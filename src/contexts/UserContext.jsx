import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'

export const AuthContext = createContext('')
export const ModalContext = createContext(false)
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()

const UserContext = ({ children }) => {
    //using for modal
    const [show, setShow] = useState(false);
    const modalShow = { show, setShow }

    //Using for Authentication
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)
    console.log(user)
    //sign up
    const createUserAuth = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //sign in
    const signInAuth = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //varified email 
    const emailVarification = () => {
        return sendEmailVerification(auth.currentUser)
    }
    //sign in with google
    const signUpWithGoogle = () => {
        setLoader(true)
        return signInWithPopup(auth, googleProvider)
    }
    //update user profile
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }
    //logOut
    const logOut = () => {
        return signOut(auth)
    }
    //observe user by using oAuth
    useEffect(() => {
        const subcription = onAuthStateChanged(auth, currentUser => {
            if (  currentUser == null || currentUser.emailVerified ) {
                setUser(currentUser)
            }
            setLoader(false)
        })
        return () => subcription()
    }, [])
    const userInfo = { user, loader,setLoader,updateUserProfile,  createUserAuth, signInAuth, emailVarification, signUpWithGoogle, logOut }
    return (
        <ModalContext.Provider value={modalShow} >
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </ModalContext.Provider>
    );
};

export default UserContext;