import SideNav from "../components/SideNav";
import Image from "next/image";
import { useState } from "react";


const AboutMe = () => {

    const [toggleOn,setToggleOn] = useState(false);

    return (
        <>
         <div>
         <div className="relative">
         <header className='fixed top-0 left-0 z-20'>
         
         <div className="border-4 border-yellow-300 rounded-xl
          fixed z-50 top-[8.3vmin]
          ml-[1.7vmin] h-[5vmin] w-[16.4vmin]"/> 
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
         className={!toggleOn ? `border-4 absolute top-[5rem] rounded-full
          w-[50vmin] h-[50vmin] z-40 p-[4vmin]
         shadow-xl shadow-black bg-red-400 left-[9vmin] text-[5vmin] font-bold` : 
         `bg-green-300 border-4 fixed z-30 top-[7rem] right-[6vmin] rounded-full h-[8rem] w-[8rem]
         shadow-xl shadow-black font-bold text-3xl`}>
            <h1 className={toggleOn ? "" : "animate-pulse hover:animate-pulse hover:scale-[100%] hover:text-purple-700"}>
                {!toggleOn ? "Press the big chunky tempting RED BUTTON" : "Press Again"}</h1>
        </button>
        </div>
        </div>
        
        
        {toggleOn ? (
         
        <div className="flex items-center flex-col top-0 h-[100%] w-full
        justify-start z-0 overflow-y-auto
          absolute">
           <div className="absolute z-0 text-white text-center border-[2rem] 
            border-purple-600 rounded
            p-4 text-xl shadow-lg shadow-black md:mx-[11rem]">
            <h1 className="font-bold fixed text-[6vmin] flex justify-center
            left-0 w-[100%]
            shadow-lg shadow-cyan-400">ABOUT <b className="text-yellow-400">
               [</b>ME<b className="text-yellow-400">]</b></h1>   
            
            <p className="p-2 pt-[8rem]">Im Thomas Mathew, 30, have a diploma in VFX.

            Now I know I&apos;ve said I love coding. Im self-taught. But that dosen&apos;t mean I would 
            enjoy being glued to a 2D screen 24x7 - which I&apos;ve been doing 
            for this whole past year only to get to this point!<br/><br/>

               Let me ask you something. Would you be okay with having
            the most luscious, most mouth-watering dishes served to you
            on a daily basis BUT on a 2D screen? <br/>

            Exactly. Everything&apos;s better in 3D whether people are aware/accepting of it or not.

            I spend almost no time at all on screens when im not coding. 
            I just take long walks which I&apos;m well aware is one of those things I 
            genuinely enjoy. <br/><br/>

            For me its about messing around and having fun with the website building process while
            at the same time staying in that constant state of awareness that I&apos;m just staring at a 2D screen
            and so I need to allocate enough time on a daily basis to step outside and see all those new sights
            and breathe all that fresh air. 


               To explore the outside world, see new places, take long walks.<br/><br/>

            I view money as &quot;freedom&quot; rather than a gadget, accessory etc. collecting responsibility 
            enhancer machine.

            People tell me I&apos;m oversmart, overconfident etc etc. I just tell them I&apos;m just less insecure.

            So to sum it up. An eccentric by all means in the year 2022.</p>
            <div className="absolute z-[-10] opacity-70 shadow-inner shadow-black
             w-full h-full bg-black top-0 left-0"/>
           </div>

        </div>
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