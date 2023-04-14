import React, {useState} from 'react'
import "./Sidebar.css";
import { useTranslation } from 'react-i18next';
import Logo1 from '../../../assets/OMIGAHEALTH LOGO PNG-13.png';
import { SidebarData } from "../../../constants/index";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const Sidebar = ({showHospital, setShowHospital,showTable, setShowTable,
  showDashboard, setDashboard, showOption,setShowOption}) => {
    const [selected, setSelected] = useState(0);

    const [expanded, setExpaned] = useState(true)
    const navigate= useNavigate();
    const {t, i18n} = useTranslation(['ABOUT']);
    const sidebarVariants = {
      true: {
        left : '0'
      },
      false:{
        left : '-60%'
      }
    }
  return (
    <>
    <div className="bars "
     style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
      <UilBars />
    </div>
  <motion.div className='sidebar'
  variants={sidebarVariants}
  animate={window.innerWidth<=768?`${expanded}`:''}
  >
    {/* logo */}
    <div className="logo">
      <img src={Logo1} alt="logo" className='' />
      <span className='bg-transparent text-transparent'>
        Sh<span className='bg-transparent text-transparent'></span>ps
      </span>
    </div>

    <div className="menu px-2">
      {SidebarData.map((item, index) => {
        return (
          <div
            className={selected === index ? "menuItem active" : "menuItem"}
            key={index}

            onClick={() => {setSelected(index)
            if(item.heading==="Hospitals")
            {
              
              setDashboard(false)
              setShowHospital(true)
              setShowTable(false)
              setShowOption(false)
            }
            else if(item.heading==="Dashboard"){
              setDashboard(true)
              setShowHospital(false)
              setShowTable(false)
             setShowOption(false)
            }
            else if(item.heading==="Doctors"){
              setDashboard(false)
              setShowHospital(false)
              setShowTable(true)
              setShowOption(false)
             
            }
            else if(item.heading==="Links"){
              setDashboard(false)
              setShowHospital(false)
              setShowTable(false)
              setShowOption(true)
            }
            else if(item.heading=="Back"){
             navigate("/")
            }
            }}
          
          >
            <item.icon />
            <span>{t(item.heading)}</span>
          </div>
        );
      })}
      {/* signoutIcon */}
      <div className="menuItem bg-transparent">
        <text className='bg-transparent'></text>
      </div>
    </div>
  </motion.div>
  </>
  )
}

export default Sidebar
