'use client'

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Loader from '../loader/page';

const VerifyEmailPage =  (token) => {

  const[apiResponse,setApiResponse] = useState("");
  const[loader,setLoader] = useState(false);

  // console.log("token====00",token.params.params.verifyUser);
  const userToken = token.params.params.verifyUser
  const router = useRouter();


   const verifyHandler = async () => {
    // console.log("enter veryfy api")
    setLoader(true)
    const verify = await axios.get(`http://localhost:3000/user/signup/verify/${userToken}`)
    setApiResponse(verify.data)
    setLoader(false)
    // console.log("verify token",verify);

    if(verify.data.status){
       router.push('/login');
    }
  }

 


  return (
    <>
    {loader ? <Loader/> :
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center px-6 py-8 md:w-full sm:w-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md md:mt-0 xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
           <h4 className='text-white' >{apiResponse ? apiResponse.message : ""}</h4>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              You have successfully registered. Please check your email for a verification link to activate your account.
            </p>
          
            <button
              onClick={verifyHandler} // Redirect to login or home page
              className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
             Activate account
            </button>
          </div>
        </div>
      </div>
    </section>
    }
    </>
  );
};

export default VerifyEmailPage;
