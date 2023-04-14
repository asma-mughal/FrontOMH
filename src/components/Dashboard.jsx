import React,{ useContext, useState} from 'react'
import { features } from '../constants';
import { FeatureCard } from './Service';
import {Navbar, Hero, Contact, Footer, Service, FindDoc} from './index';
import { useTranslation } from 'react-i18next';
import { Card } from './FindDoc';
import { useNavigate  } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import LoadingIcons from 'react-loading-icons'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { avatar1, Logo1, PM, whatsappDp } from '../assets';
const Dashboard = ({dot, setDot,setDoc, doc}) => {
  const {t} = useTranslation(['ABOUT']);
  const navigate = useNavigate();
  const {loadHospital, tryData, linksData} = useContext(AuthContext)
  const [show, setShow] = useState(false);
  React.useEffect(()=>{
   loadHospital()
    setTimeout(()=>{
      setShow(true)
    },[6000])
  },[])
const numberString =`+${linksData?.number}`

  return (
    <>
    <div className='bg-sky-50 '>
    <FloatingWhatsApp 
          //phoneNumber='+4915678570444'
          phoneNumber={numberString}
          chatMessage={`Help Needed?`}
          accountName='OmigaHealth'
          avatar={whatsappDp}
          />
        <Navbar dot={dot} setDot={setDot} />
        <div className=' bg-sky-50'>
          
        <Hero dot={dot} setDot={setDot} />
<Service dot={dot} setDot={setDot} />
</div>

<div className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 
 lg:grid-cols-4 xl:grid-cols-4 gap-1   bg-sky-50  `}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} 
        t={t}
        />
      ))}
    </div>
    <div className='bg-sky-50'>
     <FindDoc doc={doc} setDoc={setDoc}  />
   <div className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 
 lg:grid-cols-4 xl:grid-cols-4 gap-1   bg-sky-50  `}>
      {show && tryData?.data?.slice(0,4)?.map((feature, index) => (
        <Card key={feature.id} {...feature} index={index} 
        t={t}
        doc={doc}
        setDoc={setDoc}
        />
      ))}
    </div>
{!show && <LoadingIcons.Puff stroke="#44C0BC" strokeOpacity={.125} speed={.75} 
style={{
  width:'100%'
}}
/>}
    <div className='text-center m-2'>  <h5 className=" font-poppins text-sm
     tracking-tight mb-2
            dark:text-white p-5 underline font-bold text-black hover:text-secondary"
            onClick={()=>navigate('/detail')}
            >
            Show more</h5></div>
<Contact />
</div>

<Footer />

    </div>
    </>
  )
}

export default Dashboard
