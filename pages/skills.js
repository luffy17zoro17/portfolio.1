import Image from "next/image";
import Link from "next/link";
import SideNav from "../components/SideNav";
import SkillSet from "../components/SkillSet";



const Skills = () => {

    return (
      
      <div className='relative w-[100%]
      h-screen bg-black'>

       
        <h1 className="font-mono fixed z-30 w-[100%] flex justify-center
            text-[1.2rem] font-bold mt-[2.6rem] text-white shadow-lg shadow-black
            bg-gradient-to-r from-transparent via-black to-transparent
            tracking-tight md:text-[1.9rem] md:mt-[0rem]">
            MY SKILLS:
          </h1> 
        <main className="flex justify-center">
          
         
          <div className="shadow 
           
           shadow-black flex justify-center">
          
          <Image
          src="https://w0.peakpx.com/wallpaper/508/202/HD-wallpaper-lego-toys-bricks-portrait-display-colorful-lightbulb-light-bulb-white-background-3d-blocks-simple-background.jpg"
          layout="fill"
          className="object-contain shadow-inner shadow-black h-screen"
          alt=""/> 
          
          </div> 
           
          <div className="text-[1.1rem] font-mono     
           flex justify-center flex-col bg-white
           shadow-lg shadow-black md:pr-[0rem] md:items-center">

            <span className='absolute top-[7rem]
            z-10 flex-none text-sm shadow-inner shadow-black
              bg-white border-4 border-black md:top-0 md:right-0'>Im reliving my&nbsp;
             <span className="text-white font-semibold shadow-md 
             shadow-black bg-violet-500">childhood
            </span> with:</span>       
                   
          </div>
          <div className="flex flex-col justify-center items-center 
          h-screen">
          <SkillSet/> 
          </div>
          </main>
           
      </div>  
    )
}

export default Skills;