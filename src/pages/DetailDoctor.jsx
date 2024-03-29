import React, {useEffect, useContext} from 'react'

import { useTranslation } from 'react-i18next';
import AuthContext from '../context/AuthContext';

import { useState } from 'react';
import { url } from '../context/AuthState';

const DetailDoctor = ({doc}) => {
     const {getOneDoctor,singleDoc,setSingleDoc} = useContext(AuthContext)
     const [imagegal, setImage] = useState();
     useEffect(()=>{
     const Id = localStorage.getItem('UniqueDocId')
     getOneDoctor(Id)
     const x = localStorage.getItem(("DocDataOne"));
     const res = (JSON.parse(x))
     //console.log(res)
      setSingleDoc(res?.data)
     setImage(res?.data?.picture)
},[])



 const {t} = useTranslation(['ABOUT']);
  return (
   <>
        
    <div className = "about-wrapper font-poppins">
    <div className = "about-left">
    <div className = {`about-left-content ${document.body.dir=="rtl" && 'lg:m-96 '} `}>
    <div>
    <div className = "shadow m-10">
    <div className = "about-img">
    <img src={`${url}/api/v1/doctor/getImage/${imagegal}`} alt = "about image" />
    </div>
    </div>
    <h2>Dr.</h2>
    <h3>{singleDoc?.name}</h3>
    </div>
   
    </div>
    </div>
    <div className = "about-right">
    <h1>{t("hi")}<span>{t("!")}</span></h1>
    <h2></h2>
    <div className = "about-btns">
   
    </div>
    <div className = "about-para overflow-auto w-full h-full">
    <p className='overflow-auto'>I am someone who is qualified in {singleDoc?.qualification} and treats people who are ill.
    I have a experience of  {singleDoc?.experiance} years. Feel free to text me.
    </p>
 
    </div>
    </div>
    </div>
     
   </>
  )
}

export default DetailDoctor
