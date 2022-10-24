import Link from "next/link";


const SideNav = () => {

    return (
       <div className="relative flex">
          <div className="text-[1.2rem] ml-[9rem] 
          rounded-br-3xl px-[9vmin] py-[0.7vmin]
           border-4 border-gray-200 shadow-lg shadow-black
           bg-gradient-to-r from-cyan-500 to-blue-500 text-gray-300
          font-serif">
             Thomas Mathew
          </div>
        <div className="fixed bg-gradient-to-r from-black via-cyan-800 to-purple-700
         w-[10rem] h-[9rem] space-y-[0.4rem] p-3 px-[1rem]
        shadow-lg shadow-black border-[0.4rem] border-orange-500
        rounded-br-3xl
        flex flex-col text-[1.2rem] font-bold text-yellow-200">

          <Link href="/"><a className="hover:text-orange-400">Home</a></Link>  
          <Link href="/aboutme">
            <a className="hover:animate-pulse hover:text-orange-400">About Me</a></Link>

          <Link href="/contact">
            <a className="hover:animate-pulse hover:text-orange-400">Contact</a></Link>
        </div>
       </div> 
      
    );
}

export default SideNav;