import React from 'react'
import "./MainDash.css";
import Hospitals from '../pages/Hospitals';
import Users from '../pages/Users';
import Forms from '../pages/Forms';
import Links from '../pages/Links';
const MainDash = ({showHospital, setShowHospital,showTable, setShowTable,
  showDashboard, setDashboard, showOption}) => {
  return (
    <div className={`MainDash overflow-hidden 
    overflow-y-auto xl:w-screen lg:w-screen ${document.body.dir=="rtl"? 'lg:pl-96 xl:pl-96' :
    
    'lg:pr-96 xl:pr-96'}`}>
     {showDashboard && <Forms />}
    {showHospital && <Hospitals />}
   {showTable && <Users />}
   {showOption && <Links />}
    </div>
  )
}

export default MainDash
