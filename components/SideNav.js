import Link from "next/link";
import { useState } from "react";
import TextProp from "./props/TextProp";

const NavOptions = [
   {
      id:1,
      title:"Home",
      url:"/",
      clickNo:1,
   },
   {  
      id:2,
      title:"About Me",
      url:"/aboutme",
      clickNo:2
   },
   {
      id:3,
      title:"My Works",
      url:"/myworks",
      clickNo:3
   },
   {
      id:4,
      title:"Test Projects",
      url:"/testprojects",
      clickNo:4
   },
   {
      id:5,
      title:"Skills",
      url:"/skills",
      clickNo:5
   },
   {
      id:6,
      title:"Contact",
      url:"/contact",
      clickNo:6
   }
]


const SideNav = () => {

    

    return (
       <div className="fixed z-40 top-0 flex items-start">
          <TextProp title={`Thomas Mathew`} titleClassN={`text-xs ml-[5.5rem] 
          rounded-br-3xl px-[1.3rem]
           border-4 border-black shadow-inner shadow-black italic
           bg-pink-300
          font-serif sm:text-[1rem] sm:ml-[6.6rem] 
          md:ml-[7.3rem] md:text-sm lg:ml-[8rem] lg:text-lg`}/>
         
        <div className="fixed
         space-y-[0.4rem] pt-2 
          z-60
        rounded-br-3xl font-serif
        flex flex-col text-[1rem] font-bold text-pink-300 
          sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.5rem]">

       
            {NavOptions.map((item)=>(
               <div  key={item.id} className={`bg-black 
               pr-4 text-center rounded-br-full  
               transition delay-120 duration-300
            shadow-xl shadow-black
         hover:text-orange-600 hover:rotate-3
           outline`}>
                <Link  className={``} href={item.url}>{item.title}</Link>
               </div>
               
            ))}

            

         
           
        </div>
       </div> 
      
    );
}

export default SideNav;