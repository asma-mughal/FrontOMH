import React, {useState, useEffect} from 'react'
import styles from '../../../style'
const Certificate = () => {
  const [certificate, setCertificate ] = useState();
  useEffect(()=>{
      const x = localStorage.getItem(("DocDataOne"));
      const res = (JSON.parse(x))
      console.log(res)
      setCertificate(res?.data?.qualification)
  })
  return (
    <>
    <div
      className="h-screen w-full"
      style={{
        backgroundColor: "#F4F4F4",
      }}
    >
      <h1
        className="text-black font-bold text-3xl md:text-1xl
    text-center
    lg:text-2xl p-10 lg:mb-14 font-poppins"
      >
       Certifciate of Doctor<span className="text-secondary">.</span>
      </h1>
      <div className='flex items-center justify-center'>
        <p className={`${styles.paragraph} max-w-[1000px] 
        text-base mt-5 px-3 text-start`}>
         
        {certificate}<span className='text-secondary'>.</span>
          
         </p>
    </div>
    </div>
  </>
  )
}

export default Certificate
