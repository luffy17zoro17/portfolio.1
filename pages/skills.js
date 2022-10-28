import Image from "next/image";
import Link from "next/link";
import SideNav from "../components/SideNav";
import SkillSet from "../components/SkillSet";



const Skills = () => {

    return (
      
      <div className='relative w-[100%] h-screen'>

        <header className='fixed top-0 left-0 z-40'>
         
         <div className="border border-purple-500 rounded-xl
          fixed z-50 top-[4.7rem] shadow shadow-black
          ml-[0.5rem] h-[2rem] w-[6.6rem] active:shadow-inner active:shadow-black"/> 
          <SideNav/>   
        </header>
        <main className="flex h-full flex justify-center">
         
          <div className="shadow shadow-black flex justify-center">
          
          <Image
          src="https://w0.peakpx.com/wallpaper/508/202/HD-wallpaper-lego-toys-bricks-portrait-display-colorful-lightbulb-light-bulb-white-background-3d-blocks-simple-background.jpg"
          layout="fill"
          className="object-contain shadow-inner shadow-black"
          alt=""/> 
        
          </div> 
          <h1 className="font-mono fixed z-30 w-[100%] flex justify-center
            text-3xl font-bold mt-[2.6rem] text-white shadow-lg shadow-black
            bg-gradient-to-r from-transparent via-black to-transparent
            tracking-tight">
            MY SKILLS:
          </h1>  
        <div className="text-[1.1rem] font-mono 
            p-4
           flex justify-center flex-col items-center bg-white 
           shadow-lg shadow-black">
            <span className='pb-[0.5rem] mb-[1rem] absolute 
            z-10 flex text-sm shadow-inner shadow-black
              bg-white border-4 border-black sm:mt-[12rem] xl:mb-[37rem]'>Im reliving my&nbsp;
             <span className="text-white font-semibold shadow-md 
             shadow-black bg-violet-500">childhood
            </span> with:</span>       
             <SkillSet/>        
          </div>
          </main>

      </div>  
    )
}

export default Skills;