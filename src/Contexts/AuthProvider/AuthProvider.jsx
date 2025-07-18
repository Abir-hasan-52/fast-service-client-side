import React, { useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
   
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../Firebase/firebase.init";
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading , setLoading]=useState(true);

  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email, password);
  };
  // signIn user

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
//   signin with google 
const signInWithGoogle=()=>{
    setLoading(true);
    return  signInWithPopup(auth,provider)

}
// update user profile 
const updateUserProfile= profileInfo =>{
  return updateProfile(auth.currentUser,profileInfo);
}
//   Log out

const logOutUser = ()=>{
    setLoading(true);
    return signOut(auth);
}
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser);
        console.log("user in the auth state change",currentUser);
        setLoading(false);
    });
    return  ()=>{
        unSubscribe();
    }
  },[])

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    signInWithGoogle,
    logOutUser,
    updateUserProfile,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
