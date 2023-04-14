import { t } from 'i18next';
import React, { useContext, useEffect } from 'react'
import { heart, FooterLogo} from '../assets/index';
import { useNavigate  } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
const Footer = () => {
      const navigate = useNavigate();
      const {getLinks,linksData} = useContext(AuthContext)
      useEffect(()=>{
        getLinks()
         },[])
  return (
    <footer aria-label="" className="bg-sky-100 font-poppins">
    <div
      className="max-w-screen-xl px-4 py-5 mx-auto  sm:px-6 lg:px-8"
    >
      <img src={FooterLogo} />
  
      <div
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 
        lg:grid-cols-4 "
      >
        <div>
          <p className="font-medium mx-3 text-gray-900">{t("Services")}</p>
  
          <nav aria-label="Footer Navigation - Services" class="mt-6">
            <ul className="text-sm">
              <li>
                <a onClick={()=>navigate("/detail")} className="text-gray-700 transition hover:opacity-75">
                {t("Hospitals")}

                </a>
              </li>
  
              <li>
                <a onClick={()=>navigate("/admin")} className="text-gray-700 transition hover:opacity-75">

{t("Admin Login")}

                </a>
              </li>
  
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75">
          
{t("Medications")}

                </a>
              </li>
            </ul>
          </nav>
        </div>
  
        <div>
          <p className="font-medium  mx-3 text-gray-900">{t("Company")}</p>
  
          <nav aria-label="Footer Navigation - Company" className="mt-6">
            <ul className="text-sm">
              <li>
              <a onClick={()=>navigate("/developer")} className="text-gray-700 transition hover:opacity-75">
            
            {t("Details")}
                            </a>
              </li>
  
  
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75">
                 {t("Accounts Review")}
                </a>
              </li>
            </ul>
          </nav>
          
        </div>
  
        <div>
          <p className="font-medium  mx-3 text-gray-900">{t("Contact")}</p>
  
          <nav aria-label="Footer Navigation - Company" className="mt-6">
            <ul className="text-sm">
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75">
               {linksData?.hospitalEmail}
                </a>
              </li>
  <a href='#' className="text-gray-700 mx-2 transition hover:opacity-75">+{linksData?.number}</a>
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75">
               
                </a>
              </li>
  
              <li>
                
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <p className="font-medium text-gray-900 mx-3">{t("Helpful Links")}</p>

          <nav aria-label="Footer Navigation - Legal" className="mt-6">
            <ul className="text-sm">
              <li>
                <a href="" className="text-gray-700 transition hover:opacity-75"
                onClick={()=>navigate('/developer')}
                >
                {t("Developers Page")}
                </a>
              </li>
              <li>
                            <a href={linksData?.facebook}
                             className="flex items-center space-x-3 hover:text-sky-400 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#64748B" class="w-5" viewBox="0 0 16 16">
<path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                                </svg>
                                <span className='text-gray-700 transition hover:opacity-75'>Facebook</span>
                            </a>
                        </li>
                        <li>
                            <a href={linksData?.instagram}
                             className="flex items-center space-x-3 hover:text-sky-400 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#64748B" 
                                class="w-5" viewBox="0 0 16 16">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                                </svg>
                                <span className="text-gray-700 transition hover:opacity-75">Instagram</span>
                            </a>
                        </li>

                        {/* <li>
                            <a href={linksData?.instagram}
                             className="flex items-center hover:text-sky-400 transition">
                               <span class="sr-only">Twitter</span>
                <svg class="w-5" aria-hidden="true" fill="#64748B" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
                                <span className="text-gray-700 transition hover:opacity-75 mx-3">Twitter</span>
                            </a>
                        </li> */}


             
            </ul>
          </nav>
        </div>
       
      </div>
  
      <h1 className=" text-gray-500 mx-3 lg:mx-0 font-sm font-poppins">
					© 2022-2023 {t("All rights reserved | Build by")}{" "}
					<span className="">
						{t("nexgensol")}{" "}
					</span>
				</h1>
    </div>
  </footer>
  

  )
}

export default Footer
