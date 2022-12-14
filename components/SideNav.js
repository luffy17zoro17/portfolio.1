import Link from "next/link";


const SideNav = () => {

    return (
       <div className="fixed z-40 top-0 flex">
          <div className="text-sm ml-[6.7rem] 
          rounded-br-3xl px-[1.3rem]
           border-4 border-gray-300 shadow-inner shadow-black
           bg-gradient-to-r from-cyan-500 to-blue-500 text-gray-300
          font-serif sm:ml-[7.7rem] md:ml-[8.1rem] lg:ml-[8.9rem] lg:text-[1rem]">
         
             Thomas Mathew
          </div>
        <div className="fixed bg-gradient-to-r from-black via-cyan-800 to-purple-700
         space-y-[0.4rem] p-3 px-[1rem]
        shadow-lg shadow-black border-r-[0.2rem] border-gray-300 z-60
        rounded-br-3xl font-serif
        flex flex-col text-[1rem] font-bold text-yellow-100 
          sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.5rem]">

          <Link href="/"><a className="hover:text-orange-400">Home</a></Link>  
          <Link href="/aboutme">
            <a className="hover:animate-pulse hover:text-orange-400">About Me</a></Link>
          <Link href="/myworks">
            <a className="hover:animate-pulse hover:text-orange-400">My Works</a></Link>  
          <Link href="/skills">
            <a className="hover:animate-pulse hover:text-orange-400">Skills</a></Link>   

          <Link href="/contact">
            <a className="hover:animate-pulse hover:text-orange-400">Contact</a></Link>
           
        </div>
       </div> 
      
    );
}

export default SideNav;