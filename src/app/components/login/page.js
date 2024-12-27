'use client'
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Loader from '../loader/page';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
const Login =  () => {

  const [loginDataResponse , setLoginDataResponse] = useState(false)
  const [loader , setLoader] = useState(false)

  const router = useRouter()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember: false,
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().min(8, 'Password must be at least 8 characters').required('Required'),
    }),
    onSubmit: async (values) => {
      // Handle form submission
      // console.log('Form data:', values);

     try {

      setLoader(true)

      const loginData = await axios.post("http://localhost:3000/user/login",values)
      setLoader(false)
      setLoginDataResponse(loginData.data)
      console.log("loginData===...12345678",loginData.data.data.data.message)

      if(loginData.data.status){
        const userData = loginData.data
        // localStorage.setItem("user", JSON.stringify(loginData.data));
        router.push("/")
      }
       
     } catch (error) {
       console.log("login error", error);
     }




    },
  });

  return (
    <>
    {loader ? Loader :
    <section className=" min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center px-6 py-8 md:w-full sm:w-auto md:h-screen lg:py-0">
      
        <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md md:mt-0 xl:p-0 dark:bg-black opacity-90 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Login your account
            </h1>
            <form onSubmit={formik.handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-600 text-sm mt-1">{formik.errors.email}</div>
                ) : null}
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-600 text-sm mt-1">{formik.errors.password}</div>
                ) : null}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">
                      {loginDataResponse ? loginDataResponse.message : ""}
                    </label>
                  </div>
                </div>
                <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Login
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{' '}
                <a href="/registration" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
    }
    </>
  );
};

export default Login;
