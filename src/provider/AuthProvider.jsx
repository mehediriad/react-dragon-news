import { createContext, useEffect, useState } from "react";
import { getAuth,signOut,createUserWithEmailAndPassword,onAuthStateChanged ,updateProfile,signInWithEmailAndPassword    } from "firebase/auth";
import app from "../../src/firebase/firebase.init"

const auth = getAuth(app);

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword (auth,email,password)
    }
    const updateUserProfile = (name,photo) =>{
        
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          }).then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
    }


    const signInUser = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword (auth,email,password)
    }
    const logOut = ()=>{
        setLoading(true)
       return signOut(auth)
    }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (user) => {
           setUser(user)
           setLoading(false)
          });

          return ()=>{
            unSubscribe()
          }
    },[])

    const AuthInfo ={
        user,
        createUser,
        updateUserProfile,
        signInUser,
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;