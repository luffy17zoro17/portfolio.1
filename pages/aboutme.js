import SideNav from "../components/SideNav";
import Image from "next/image";
import { useState } from "react";
import AboutMeText from "../components/AboutMeText";


const AboutMe = () => {

    const [toggleOn,setToggleOn] = useState(false);

    return (
        <>
         <div>
         <div className="relative">
         <header className='fixed top-0 left-0 z-40'>
         
         <div className="border border-purple-500 rounded-xl
          fixed z-50 top-[2.6rem] shadow-inner shadow-black
          ml-[0.5rem] h-[2rem] w-[6.6rem] active:shadow active:shadow-black"/> 
          <SideNav/>   
        </header>
      <div className="w-full h-full fixed">

       <div className=''>
          <Image 
            src="https://wallpaperaccess.com/full/2665653.jpg"
            layout="fill"
            className="object-cover"
            alt=""
          />  
        
        
        

         <div className="mt-[15rem] ml-[3rem] z-60 border-4 ">
        <button onClick={()=>setToggleOn(!toggleOn)}
         className={!toggleOn ? `border-4 absolute top-[10rem] left-[10rem]
          rounded-full
          w-[50vmin] h-[50vmin] z-40 p-[4vmin]
         shadow-xl shadow-black bg-red-400 left-[9vmin] text-[5vmin] font-bold 
         active:shadow-inner active:shadow-black` : 
         `bg-red-500 border-4 fixed z-30 top-[5rem] right-[4vmin] rounded-full shadow-inner
         shadow-xl shadow-black font-bold h-[4rem] w-[4rem] sm:h-[5rem] sm:w-[5rem]
          md:text-3xl md:h-[8rem] md:w-[8rem] active:shadow-xl active:shadow-black`}>
            <h1 className={toggleOn ? "" : "animate-pulse hover:animate-pulse hover:scale-[110%] hover:text-purple-700"}>
                {!toggleOn ? "Press the big chunky tempting RED BUTTON" : "Press Again"}</h1>
        </button>
        </div>
        </div>
        
        
        {toggleOn ? (
         
         <AboutMeText/>
        
        ) : (
        <div></div>
        )}
      
        </div>
        </div>
      </div>  
        </>
    );
}


export default AboutMe;