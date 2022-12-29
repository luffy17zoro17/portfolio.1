import Link from "next/link";


const SideNav = () => {

    return (
       <div className="fixed z-40 top-0 flex">
          <div className="text-sm ml-[6.7rem] 
          rounded-br-3xl px-[1.3rem]
           border-4 border-gray-300 shadow-inner shadow-black italic
           bg-gradient-to-r from-red-700 to-yellow-500 text-gray-900
          font-serif sm:text-[1rem] sm:ml-[7.7rem] md:ml-[8.1rem] md:text-md lg:ml-[8.9rem] lg:text-lg">
         
             Thomas Mathew
          </div>
        <div className="fixed bg-gradient-to-r from-black to-transparent
         space-y-[0.4rem] p-3 px-[1rem]
        shadow-lg shadow-black border-r-[0.5rem] border-gray-300 z-60
        rounded-br-3xl font-serif
        flex flex-col text-[1rem] font-bold text-pink-500 
          sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.5rem]">

          <Link href="/"><a className="hover:text-orange-400 hover:font-mono
          focus:ring focus:ring-violet-300 focus:rounded-full
          focus:shadow-inner focus:shadow-black 
          
          focus:pl-2">Home</a></Link>  
          <Link href="/aboutme">
            <a className="hover:text-orange-400 
            hover:font-mono 
            focus:ring focus:ring-violet-300 focus:rounded-full
            focus:shadow-inner focus:shadow-black
             focus:italic focus:px-2">About Me</a></Link>
          <Link href="/myworks">
            <a className="
            hover:text-orange-400 hover:font-mono
            focus:ring focus:ring-violet-300 focus:rounded-full
            focus:shadow-inner focus:shadow-black
             focus:px-2 focus:italic">My Works</a></Link>  
          <Link href="/skills">
            <a className="hover:text-orange-400 
            hover:font-mono focus:shadow-inner focus:shadow-black
            focus:ring focus:ring-violet-300 focus:rounded-full
             focus:italic focus:px-2">Skills</a></Link>   

          <Link href="/contact">
            <a className="hover:text-orange-400
            focus:ring focus:ring-violet-300 focus:rounded-full
             focus:px-2 focus:shadow-inner focus:shadow-black
             focus:italic hover:font-mono">Contact</a></Link>
           
        </div>
       </div> 
      
    );
}

export default SideNav;