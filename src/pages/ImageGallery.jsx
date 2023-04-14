import React, { useState } from "react";
import { useEffect, useContext } from "react";
import { url } from "../context/AuthState";
import AuthContext from "../context/AuthContext";
const ImageGallery = () => {
  const [imagegal, setImage] = useState([]);
  const { getImage 
} = useContext(AuthContext)
  useEffect(() => {
    const img = localStorage.getItem("ImageHospital");
    setImage(JSON.parse(img))
    
  }, []);
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
         Hospital Images<span className="text-secondary">.</span>
        </h1>
        {imagegal.length === 0 && <p className="text-black font-md text-sm md:text-1xl
      text-center font-poppins"   >No Images to show</p>}
        {!imagegal ? (
          <div>
            <h1>Loading...</h1>
          </div>
        ) : (
          <section
            className="grid grid-cols-1 gap-5 
        md:grid-cols-2 xl:grid-cols-3 pb-20 m-5 lg:container items-center justify-center lg:ml-10"
          >
            {imagegal?.map((i)=>{
            return ( 
            <img src={`${url}/api/v1/hospital/getImage/${i}`} width="300" />)
          })}
            
          </section>
        )}
      </div>
    </>
  );
};

export default ImageGallery;
