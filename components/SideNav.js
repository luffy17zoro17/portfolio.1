import Link from "next/link";
import { useState } from "react";

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
       <div className="fixed z-40 top-0 flex">
          <div className="text-sm ml-[8.3rem] 
          rounded-br-3xl px-[1.3rem]
           border-4 border-black shadow-inner shadow-black italic
           bg-gradient-to-r from-red-700 to-yellow-500 text-gray-900
          font-serif sm:text-[1rem] sm:ml-[9rem] 
          md:ml-[9.7rem] md:text-md lg:ml-[10.9rem] lg:text-lg">
         
             Thomas Mathew
          </div>
        <div className="fixed
         space-y-[0.4rem] pt-2 
          z-60
        rounded-br-3xl font-serif
        flex flex-col text-[1rem] font-bold text-pink-300 
          sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.5rem]">

       
            {NavOptions.map((item)=>(
               <div  key={item.id} className={`bg-black 
               pr-4 text-center rounded-br-full  
            shadow-md shadow-black
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