
import Image from "next/image";

import SkillSet from "./SkillSet";

const SkillsComp = () => {
    return (
        <div>
          <div className='relative w-[100%]
      h-screen bg-black flex justify-center'>

       
        
        <main className="flex justify-center">
          
          
          <div className="shadow z-0
           
           shadow-black flex justify-center">
          
          <Image
          src="https://w0.peakpx.com/wallpaper/508/202/HD-wallpaper-lego-toys-bricks-portrait-display-colorful-lightbulb-light-bulb-white-background-3d-blocks-simple-background.jpg"
          layout="fill"
          className="object-contain shadow-inner shadow-black h-screen
            "
          alt=""/> 
          
          </div> 
           
          <div className="text-[1.1rem] font-mono z-10
           flex justify-center flex-col bg-white fixed bottom-0 right-0
           shadow-lg shadow-black md:pr-[0rem] md:items-center
           ">

            <span className='
              text-sm shadow-inner shadow-black 
              bg-yellow-300 border-4 border-black lg:p-4'>Im reliving my&nbsp;
             <span className="font-semibold shadow-md text-yellow-300
             shadow-black bg-purple-600 p-1">childhood
            </span> with:&nbsp;</span>       
                   
          </div>
          <div className="h-screen absolute w-full bg-black opacity-60 z-0
           "/> 
           <div className="h-screen absolute w-full bg-black opacity-60 z-0
           bg-gradient-to-b from-transparent via-yellow-300 to-transparent"/> 

          <div className="flex flex-col justify-center items-center 
          h-screen z-10">
            
           
          <SkillSet/> 
          </div>
          </main>
          <div className="font-mono fixed z-10 w-[50%] flex justify-center
            text-[1.2rem] mt-[2rem] text-black shadow-lg rounded-b-full 
            shadow-black font-semibold
            bg-gradient-to-b from-transparent via-yellow-300 to-transparent
            py-1 md:py-0 md:text-[1.9rem] md:mt-[0rem]">
            MY SKILLS:
          </div>  
      </div>    

        </div>
    );
}

export default SkillsComp