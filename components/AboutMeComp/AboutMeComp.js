import Image from "next/image";
import { useState } from "react";
import AboutMeText from "./AboutMeText";


const AboutMeComp = () => {

    const [toggleOn,setToggleOn] = useState(false);
    return (
       <div>
            <div className="relative">
      
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
         className={!toggleOn ? `border-4 absolute top-[12rem] left-[10rem]
          rounded-full w-[50vmin] h-[50vmin] z-40 p-4 border-yellow-300
         shadow-xl shadow-black bg-red-400 left-[9vmin] text-[5vmin] font-bold 
         active:shadow-inner active:shadow-black md:left-[15rem] md:top-[3rem]` : 
         `bg-red-500 border-4 
           border-yellow-300 fixed z-30 top-[5rem] right-[3rem] md:right-[6rem] rounded-full shadow-inner
         shadow-black font-bold h-[5rem] w-[5rem] sm:h-[5rem] sm:w-[5rem]
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
    );
}

export default AboutMeComp;