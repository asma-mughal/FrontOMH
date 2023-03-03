import React,{useContext, useState} from 'react'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components';
import {dept } from '../assets/index';
import styles from '../style';
import AuthContext from '../context/AuthContext';
import LoadingIcons from 'react-loading-icons'
const Departments = ({doc,setDoc, dot, setDot}) => {
    const {t} = useTranslation(['ABOUT']);
    const [loading,setLoading] = useState(false);
    const navigate= useNavigate();
    const { getOneHospital,getOneDept, deptArray, setDeptarray, setDoctorArray
    } = useContext(AuthContext)
  
    const [loadingDoc,setLoadingDoc] = useState(false);
   let loopData;
    React.useEffect(()=>{
       const Id = localStorage.getItem('IdMainHosp')
       getOneHospital(Id)
      const x = localStorage.getItem(("HospDataOne"));
      const res = (JSON.parse(x))
       loopData = (res?.data?.dep)
      setDeptarray(loopData)
      setTimeout(()=>{
      setLoading(true)  
      },[3000])
    },[])
   
    
   const handleDoctors = (i) =>{
    setLoadingDoc(false)
    console.log(i)
    getOneDept(i) 
    const x = localStorage.getItem(("DocDataUnique"));
    const res = (JSON.parse(x))
    const loopData = (res?.data?.doctor)
    setDoctorArray(loopData)
    setTimeout(()=>{
      navigate("/cardDoc")
      },[3000])
   }

   function DoctorOperations(){
    const x = localStorage.getItem(("DocDataUnique"));
    const res = (JSON.parse(x))
    const loopData = (res?.data?.doctor)
    setDoctorArray(loopData)
    setTimeout(()=>{
    //navigate("/cardDoc")
    },[3000])
   }
  return (
    <div className='bg-sky-50 h-screen' id="doc" name="doc">
    <Navbar dot={dot} setDot={setDot}/>
    <div className='bg-sky-50 pt-20 px-5'>
    <h4 className={`${styles.heading2} px-5`}>
       {t("Choose Department")}, <br className="sm:block hidden " /> 
       {t("For Yourself")}
      
      </h4>
      <div className='flex  bg-sky-50 flex-row place-content-center items-center justify-center'>
      {!loading && <LoadingIcons.Puff stroke="#44C0BC" strokeOpacity={.125} speed={.75} 
style={{
  width:'100%'
}}
/>}
      </div>
      {deptArray?.length==0 && <p className='font-poppins
    mx-6 font-base font-semibold capitalize
    '>{t("No Department Available")}.</p>}
    <div className='grid grid-cols-1 bg-sky-50 sm:grid-cols-1 md:grid-cols-3 
 lg:grid-cols-4 xl:grid-cols-4 gap-2  '>
  {loading && deptArray?.map((i)=>{
    return (<>
    <div className="w-full  dark:bg-gray-900 py-6 px-6
           flex justify-center items-center bg-sky-50  font-poppins  overflow-hidden">
              <div className=''>

                  <div className="max-w-xs bg-sky-50  h-full flex flex-col justify-between 
                   dark:bg-gray-800 rounded-none shadow-lg  ">
                    <img class="w-72 h-full " 
                    src={dept}
                    
                    alt="dept" />
                      <button 
       className={`w-72 px-3 bg-sky-50 md:px-9 xl:px-3 lg:px-3 mb-2 cursor-pointer
         ${document.body.dir ==="ltr" ? 
    'text-left' :'text-right'
    } h-10 text-left bg-sky-50 rounded-none border-transparent`}
       >
            <h5 class="text-black font-poppins font-bold text-base  tracking-tight 
            
            dark:text-white hover:text-secondary" >
             {i.name}</h5>
              </button>
              <div className=' bg-sky-50'>
              <button  class="bg-secondary
               border-secondary w-36 h-10
             mx-2  md:mx-9 lg:mx-2 xl:mx-2 my-2 font-poppins rounded border p-2
                   text-white transition hover:bg-opacity-90 hover:text-black"
              onClick={()=>handleDoctors(i?._id)}
              >
                
              <p className='text-center'>  Show Doctors</p>
              </button>
                <div className='flex flex-col'>
                </div>
                
              </div>
    
                      
                  </div>
                
              </div>
          </div>
    </>)
  })}
    </div>
    </div>
      </div>
  )
}

export default Departments
