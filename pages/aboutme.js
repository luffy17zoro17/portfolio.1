import SideNav from "../components/SideNav";
import Image from "next/image";
import { useState } from "react";


const AboutMe = () => {

    const [toggleOn,setToggleOn] = useState(false);

    return (
        <>
        <div className="">
           <div className="border-4 border-yellow-300 rounded-xl
            fixed z-50 top-[4.5rem]
            ml-[0.3rem] h-[3rem] w-[9rem]"/> 
            <SideNav/>
        
        </div>


        <div className={!toggleOn ? "w-full h-[100%] absolute" : `w-full h-[91rem] absolute
        flex flex-col justify-start sm:h-[76rem] md:h-[66rem] lg:h-[61rem] xl:h-[61.4rem]`}>
          <Image 
            src="https://wallpaperaccess.com/full/2665653.jpg"
            layout="fill"
            className="object-cover"
            alt=""
          />  
        
        
        
        {toggleOn ? (
        <div className="flex justify-start flex-col items-center w-[100%]
        relative absolute top-[18.4rem]">
           <div className="absolute z-0 text-white text-center w-[100%] border-[2rem] 
            border-purple-600 rounded
            p-4 text-xl shadow-lg shadow-black xl:w-[70%]">
            <h1 className="absolute flex justify-center text-black w-[100%] 
            top-[-8rem] font-bold text-5xl sm:top-[-11rem] xl:top-[-15rem]">ABOUT&nbsp;
            <b className="text-orange-700">[</b>ME<b className="text-orange-700">]</b></h1>
            <p className="p-2">Im Thomas Mathew, 30, have a diploma in VFX.

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

         <div className="ml-[11rem]">
        <button onClick={()=>setToggleOn(!toggleOn)}
         className={!toggleOn ? `border-4 absolute top-[7rem] rounded-full h-[18rem] w-[18rem] 
         shadow-xl shadow-black bg-red-400 text-4xl font-bold xl:top-[23rem] xl:left-[15rem]` : 
         `bg-green-300 border-4 fixed z-30 top-[5rem] right-[0rem] rounded-full h-[7rem] w-[7rem] 
         shadow-xl shadow-black font-bold text-3xl xl:top-[15rem] xl:right-[11%]`}>
            <h1 className={toggleOn ? "" : "animate-pulse hover:animate-pulse hover:scale-[102%] hover:text-purple-700"}>
                {!toggleOn ? "Press the big chunky tempting RED BUTTON" : "Press Again"}</h1>
        </button>
        </div>
        </div>
       
        
        </>
    );
}


export default AboutMe;