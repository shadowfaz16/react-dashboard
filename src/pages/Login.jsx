import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import ImageLight from "../assets/img/login-office.jpeg";
import ImageDark from "../assets/img/login-office-dark.jpeg";
//import { GithubIcon, TwitterIcon } from "../icons";
import { Label, Input, Button } from "@windmill/react-ui";
import { GlobalUserContext } from "../context/GlobalContext";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../services";

const Login = () => {

  const { userLogin } = useContext(GlobalUserContext);
  const [user, setUser] = useState(false);

  const auth = getAuth(app);

  onAuthStateChanged(auth, (sesion) => {
    if (sesion) {
      setUser(true);      
    } else {
      setUser(false);      
    }
  });

  const logOut = async () => {
    await signOut(auth)
  }  

  const submit = (e)=>{
    e.preventDefault();
    const data = Array.from(new FormData(e.target))
    const dataObj = Object.fromEntries(data)
    userLogin(dataObj)
  } 
  

  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      {user === false ? (
        <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="object-cover w-full h-full dark:hidden"
              src={ImageLight}
              alt="Office"
            />
            <img
              aria-hidden="true"
              className="hidden object-cover w-full h-full dark:block"
              src={ImageDark}
              alt="Office"
            />
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                Ingresa a PXM
              </h1>
              <Label>
                <span>Email</span>
                <Input
                  className="mt-1"
                  type="email"
                  placeholder="john@doe.com"
                />
              </Label>

              <Label className="mt-4">
                <span>Password</span>
                <Input
                  className="mt-1"
                  type="password"
                  placeholder="***************"
                />
              </Label>

              <button className="mt-4" onClick={submit}>
                Log in
              </button>

              <hr className="my-8" />

              {/* <Button block layout="outline">
                <GithubIcon className="w-4 h-4 mr-2" aria-hidden="true" />
                Github
              </Button>
              <Button className="mt-4" block layout="outline">
                <TwitterIcon className="w-4 h-4 mr-2" aria-hidden="true" />
                Twitter
              </Button> */}

              <p className="mt-4">
                <Link
                  className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                  to="/forgot-password"
                >
                  Olvidaste tu contraseña?
                </Link>
              </p>
              <p className="mt-1">
                <Link
                  className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                  to="/create-account"
                >
                  Crear cuenta
                </Link>
              </p>
            </div>
          </main>
        </div>
      </div>
      ) : (
        <div>
        <h1>Usuario logueado</h1>   
        <button className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3 bg-gradient-to-r from-blue-600 to-blue-300" 
        onClick={logOut}>Cerrar sesión</button>               
      </div>
    )}
    </div>
  );
};

export default Login;
