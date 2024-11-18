import { createContext, useEffect, useState } from "react";
import { getAuth,signOut,createUserWithEmailAndPassword,onAuthStateChanged ,updateProfile,signInWithEmailAndPassword    } from "firebase/auth";
import app from "../../src/firebase/firebase.init"

const auth = getAuth(app);

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loding,setLoding] = useState(true)

    const createUser = (email,password) =>{
        setLoding(true)
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
        setLoding(true)
        return signInWithEmailAndPassword (auth,email,password)
    }
    const logOut = ()=>{
        setLoding(true)
       return signOut(auth)
    }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (user) => {
           setUser(user)
           setLoding(false)
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
        loding
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;