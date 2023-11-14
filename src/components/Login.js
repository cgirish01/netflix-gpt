import React, { useEffect, useState } from 'react'
import Header from './Header'


const Login = () => {
    const [isSignInForn, setSignInForm] = useState(true);
    const toggleSignInForm = () => {
        setSignInForm(!isSignInForn)
    }
    return (
        <div >
            <Header />
            <div className="absolute" >
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt="Netflix background" />
            </div>
            <form className="absolute p-12 bg-black w-1/4 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
                <h1 className="text-3xl font-bold py-4">{isSignInForn ? "Sign In" : "Sign Up"}</h1>
                <input className="border-b-2 border-gray-500  p-2 my-4  w-full bg-gray-800" type="text" placeholder="Email or phone number" />
                {isSignInForn ? "" : <input className="border-b-2 border-gray-500  p-2 my-4  w-full bg-gray-800" type="text" placeholder="Full Name" />}
                <input className="border-b-2 border-gray-500  p-2 my-4  w-full bg-gray-800" type="password" placeholder="Password" />
                <button className="bg-red-600  w-full bg-red:700 p-4 my-6 rounded-lg">{isSignInForn ? "Sign In" : "Sign Up"}</button>
                <p className="text-center">{isSignInForn ? "New to Netflix? " : "Already Registered "}<span className="text-red-600 cursor-pointer" onClick={toggleSignInForm}>{isSignInForn ? "Sign In" : "Sign Up Now "}</span></p>

            </form>
        </div>
    )
}

export default Login