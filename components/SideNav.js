import Link from "next/link";

import { useSelector } from "react-redux";
import { selectLoading } from "../reducers/Loading/loadingSlice";


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
  
]


const SideNav = () => {
   
   const loadValue = useSelector(selectLoading)
   


   return (
       <div className={`fixed z-40 flex items-start
         transition delay-120 duration-300 ease-in top-0
         
        `}>
          <TextProp title={`Thomas Mathew`} titleClassN={`text-xs ml-[6.8rem] 
          rounded-br-3xl px-[1.3rem]
           border-4 border-black shadow-inner shadow-black italic
           bg-yellow-300
          font-serif sm:text-[1rem] sm:ml-[7.6rem] 
          md:ml-[8.5rem] md:text-sm lg:ml-[9rem] lg:text-lg`}/>
         
        <div className="fixed
         space-y-[0.4rem] pt-2 
          z-60
        rounded-br-3xl font-serif
        flex flex-col text-[1rem] font-bold text-yellow-300 
          sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.5rem]">

       
            {NavOptions.map((item)=>(
             <Link key={item.id} className={`cursor-pointer`} 
               href={item.url}>  
               <div className={`bg-black 
               pr-4 text-center rounded-br-full  
               cursor-pointer active:outline-double
               transition delay-120 duration-300
            shadow-xl shadow-black
         hover:text-purple-400 hover:rotate-3
           outline xl:pr-7`}>
                  
                   {item.title}
               
               </div>
             </Link>  
               
            ))}

            

         
           
        </div>
       </div> 
      
    );
}

export default SideNav;