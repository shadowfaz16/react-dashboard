import React from "react";
import { createContext, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut,
} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import app from "../services";

export const GlobalUserContext = createContext();

const GlobalContext = ({ children }) => {
  const [userid, setUserid] = useState(null);

  const auth = getAuth(app);
  const db = getFirestore(app);
  const date = new Date();

  const userRegister = async (data) => {
    const { email, password, isagree } = data;
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      await signOut(auth);
      const userRef = doc(db, "users/", user.user.uid);
      await setDoc(userRef, {
        email: email,
        isagree: isagree,
        createAccount:
          date.getHours() +
          "/" +
          date.getDay() +
          "/" +
          date.getMonth() +
          "/" +
          date.getFullYear(),
      });
      await sendEmailVerification(user.user);
      alert(
        "Se ha enviado un correo de verificación a tu cuenta de correo electrónico",
      );
    } catch (error) {
      alert(error.message);
    }
  };

  const userLogin = async (data) => {
    const { email, password } = data;
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);

      if (!user.user.emailVerified) {
        if (
          window.confirm(
            "Tu cuenta no ha sido verificada, ¿Deseas reenviar el correo de verificación?",
          )
        ) {
          await signOut(auth);
          await sendEmailVerification(user.user);
        } else {
          await signOut(auth);
        }
      } else {
        setUserid(user.user.uid);
        console.log(user.user.uid);
        alert("Usuario logueado correctamente");
      }
    } catch (error) {
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <GlobalUserContext.Provider
      value={{
        userid,
        setUserid,
        userRegister,
        userLogin,
      }}
    >
      {children}
    </GlobalUserContext.Provider>
  );
};
export default GlobalContext;
