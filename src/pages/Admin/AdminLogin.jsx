import React,{useRef, useState} from 'react'
import { mainLogo2} from '../../assets/index';
import { Link, useNavigate  } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
const AdminLogin = () => {
  const emailRef= useRef();
  const passRef = useRef();
  const {t, i18n} = useTranslation(['ABOUT']);
  const [error,setError] = useState('');
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();
  const {login } = useContext(AuthContext)
  const email2 = "abc123a@gmail.com";
  const password2 = "password123";
  const token = localStorage.getItem('Token');
  async function handleSubmit (e) {
  e.preventDefault();
      try {
          setError('')
          setLoading(true)
          if(email2== emailRef.current.value && password2 == passRef.current.value){
            await login(emailRef.current.value,passRef.current.value);
            setError('')
          }
          else {
            setError('Incorrect password or email')
          }
         
         //navigate("/home");
      }
     catch(error) {
     console.log(error)
     setError('Failed to Sign In')
     }
  setLoading(false)
  }
  return (
    <>
    {token && navigate("/dash")}
    <div className="flex min-h-full items-center justify-center 
    py-12 px-4 sm:px-6 lg:px-8 font-poppins bg-transparent">
         <div className="w-full max-w-md space-y-8 bg-transparent">
           <div>
             <img
               className="mx-auto h-28 w-auto"
               src={mainLogo2}
               alt="Your Company"
             />
             <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              {t("Sign in to your account")}
             </h2>
             
           </div>
           {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
   <strong className="font-bold">{t("Failed!")}</strong>
   <span className="block sm:inline">{error}</span>
   <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
     <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
   </span>
 </div>}
           <form className="mt-8 space-y-6 bg-transparent" action="#" method="POST" onSubmit={handleSubmit}>
             <input type="hidden" name="remember" defaultValue="true" />
             <div className="-space-y-px rounded-md shadow-sm">
               <div>
                 <label htmlFor="email-address" className="sr-only">
                   {t("Email address")}
                 </label>
                 <input
                   id="email-address"
                   ref={emailRef}
                   name="email"
                   type="email"
                   autoComplete="email"
                   required
                   className="relative block w-full 
                   appearance-none rounded-none rounded-t-md
                    border border-gray-300 px-3 py-2 text-gray-900
                     placeholder-gray-500 m-2  sm:text-sm"
                   placeholder={t("Email address")}
                 />
               </div>
               <div>
                 <label htmlFor="password" className="sr-only">
                   {t("Password")}
                 </label>
                 <input
                   id="password"
                   name="password"
                   ref={passRef}
                   type="password"
                   autoComplete="current-password"
                   required
                   className="relative block w-full appearance-none rounded-none  border border-gray-300
                    px-3 py-2 text-gray-900 placeholder-gray-500 m-2 sm:text-sm"
                   placeholder={t("Password")}
                 />
               </div>
               
             </div>
             <div>
               <button
               disabled={loading }
                 type="submit"
                 className="group relative flex
                 cursor-pointer
                  w-full justify-center rounded-md border border-transparent bg-secondary
                   py-2 px-4 m-2 text-sm font-medium text-white hover:bg-white
                   hover:text-black hover:border-secondary
                    focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
               >
                    
                 {t("Sign In")}
               </button>
             </div>
           </form>
         </div>
       </div></>
  )
}

export default AdminLogin
