import Image from "next/image";

import SkillSet from "../components/SkillSet";



const Skills = () => {

    return (
      
      <div className='relative w-[100%]
      h-screen bg-black flex justify-center'>

       
        <h1 className="font-mono fixed z-30 w-[50%] flex justify-center
            text-[1.2rem] font-bold mt-[1rem] text-white shadow-lg shadow-black
            bg-gradient-to-r from-transparent via-black to-transparent
            py-1 md:py-0 md:text-[1.9rem] md:mt-[0rem]">
            MY SKILLS:
          </h1> 
        <main className="flex justify-center">
          
          
          <div className="shadow 
           
           shadow-black flex justify-center">
          
          <Image
          src="https://w0.peakpx.com/wallpaper/508/202/HD-wallpaper-lego-toys-bricks-portrait-display-colorful-lightbulb-light-bulb-white-background-3d-blocks-simple-background.jpg"
          layout="fill"
          className="object-contain shadow-inner shadow-black h-screen
            blur-sm"
          alt=""/> 
          
          </div> 
           
          <div className="text-[1.1rem] font-mono z-10
           flex justify-center flex-col bg-white fixed bottom-0 right-0
           shadow-lg shadow-black md:pr-[0rem] md:items-center
           ">

            <span className='
              text-sm shadow-inner shadow-black
              bg-white border-4 border-black lg:p-4'>Im reliving my&nbsp;
             <span className="text-white font-semibold shadow-md 
             shadow-black bg-violet-500">childhood
            </span> with:&nbsp;</span>       
                   
          </div>
          <div className="h-screen absolute w-full bg-black opacity-40 z-0
           "/> 
          <div className="flex flex-col justify-center items-center 
          h-screen z-10">
           
          <SkillSet/> 
          </div>
          </main>
           
      </div>  
    )
}

export default Skills;