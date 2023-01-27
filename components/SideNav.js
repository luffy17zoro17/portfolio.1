import Link from "next/link";

const NavOptions = [
   {
      id:1,
      title:"Home",
      url:"/",
   },
   {  
      id:2,
      title:"About Me",
      url:"/aboutme"
   },
   {
      id:3,
      title:"My Works",
      url:"/myworks"
   },
   {
      id:4,
      title:"Test Projects",
      url:"/testprojects",
   },
   {
      id:5,
      title:"Skills",
      url:"/skills",
   },
   {
      id:6,
      title:"Contact",
      url:"/contact",
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
        <div className="fixed bg-gradient-to-r from-black via-red-500 to-transparent
         space-y-[0.4rem] py-2 pr-[0.5rem]
        shadow-lg shadow-black border-black z-60
        rounded-br-3xl font-serif
        flex flex-col text-[1rem] font-bold text-pink-300 
          sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.5rem]">

       
            {NavOptions.map((item)=>(
               <div key={item.id} className="bg-black pr-2 text-center rounded-r-full  
                  shadow shadow-yellow-400
               hover:text-orange-400 hover:font-sans hover:border-y-4 hover:border-cyan-400
               ">
                <Link href={item.url}>{item.title}</Link>
               </div>
            ))}
           
        </div>
       </div> 
      
    );
}

export default SideNav;