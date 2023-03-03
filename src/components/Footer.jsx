import { t } from 'i18next';
import React from 'react'
import { heart, FooterLogo} from '../assets/index';
import { useNavigate  } from 'react-router-dom';
const Footer = () => {
    const menu = [
        {
          id: 1,
          title: "Services",
          subMenu: [
            {
              id: 1,
              title: "Hospitals",
            },
            {
              id: 2,
              title: "Admin Login",
            },
            {
              id: 3,
              title: "Medications",
            },
            {
              id: 4,
              title: "Details",
            },
          ],
        },
        {
          id: 2,
          title: "Follow Us",
          subMenu: [
            {
              id: 1,
              title: "Facebook",
             
            },
            {
              id: 2,
              title: "Instagram",
            },
            {
              id: 3,
              title: "Twitter",
            },
          ],
        },
        {
          id: 3,
          title: "Contact us",
          subMenu: [
            {
              id: 1,
              title: "Toll Free: +(49) 17661843993",
            },
            {
              id: 2,
              title: "Frankfurt-Germany:+(49) 17661843993",
            },
            {
              id: 3,
              title: "Email: info.de@omigahealth.com",
            },
          ],
        },
       
      ];
      const navigate = useNavigate();
  return (
    <footer aria-label="" class="bg-sky-100 font-poppins">
    <div
      class="max-w-screen-xl px-4 py-5 mx-auto  sm:px-6 lg:px-8"
    >
      <img src={FooterLogo} />
  
      <div
        class="grid grid-cols-1 gap-8 sm:grid-cols-2 
        lg:grid-cols-4 "
      >
        <div>
          <p class="font-medium mx-3 text-gray-900">{t("Services")}</p>
  
          <nav aria-label="Footer Navigation - Services" class="mt-6">
            <ul class="text-sm">
              <li>
                <a onClick={()=>navigate("/detail")} class="text-gray-700 transition hover:opacity-75">
                {t("Hospitals")}

                </a>
              </li>
  
              <li>
                <a onClick={()=>navigate("/admin")} class="text-gray-700 transition hover:opacity-75">

{t("Admin Login")}

                </a>
              </li>
  
              <li>
                <a href="#" class="text-gray-700 transition hover:opacity-75">
          
{t("Medications")}

                </a>
              </li>
            </ul>
          </nav>
        </div>
  
        <div>
          <p class="font-medium  mx-3 text-gray-900">{t("Company")}</p>
  
          <nav aria-label="Footer Navigation - Company" class="mt-6">
            <ul class="text-sm">
              <li>
              <a onClick={()=>navigate("/developer")} class="text-gray-700 transition hover:opacity-75">
            
            {t("Details")}
                            </a>
              </li>
  
  
              <li>
                <a href="#" class="text-gray-700 transition hover:opacity-75">
                 {t("Accounts Review")}
                </a>
              </li>
            </ul>
          </nav>
          
        </div>
  
        <div>
          <p class="font-medium  mx-3 text-gray-900">{t("Contact")}</p>
  
          <nav aria-label="Footer Navigation - Company" class="mt-6">
            <ul class="text-sm">
              <li>
                <a href="#" class="text-gray-700 transition hover:opacity-75">
               info.de@omigahealth.com
                </a>
              </li>
  <a href='#' class="text-gray-700 mx-2 transition hover:opacity-75">+(49) 17661843993</a>
              <li>
                <a href="#" class="text-gray-700 transition hover:opacity-75">
               
                </a>
              </li>
  
              <li>
                
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <p class="font-medium text-gray-900 mx-3">{t("Helpful Links")}</p>

          <nav aria-label="Footer Navigation - Legal" class="mt-6">
            <ul class="text-sm">
              <li>
                <a href="" class="text-gray-700 transition hover:opacity-75"
                onClick={()=>navigate('/developer')}
                >
                {t("Developers Page")}
                </a>
              </li>

              

             

             
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
