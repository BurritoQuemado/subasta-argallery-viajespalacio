import React from "react";
import { LoginForm } from "../components";
import { useNavigate } from 'react-router-dom';


function LoginPage({ setLoggedIn }) {
    const navigate = useNavigate();

    const signin = () => {
        navigate('/');
    } 

    return (
        <>
            <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Ingrese a la experiencia crypto-artística</h2>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <LoginForm setLoggedIn={setLoggedIn} signin={signin}/>
                </div>
                </div>
            </div>
        </>
    );

}

export default LoginPage;