import Link from "next/link";


const SideNav = () => {

    return (
       <div className="relative flex">
          <h1 className="text-[2vmin] ml-[17vmin] 
          rounded-br-3xl px-[9vmin] py-[0.7vmin]
           border-4 shadow-2xl shadow-black
           bg-gradient-to-r from-cyan-500 to-blue-500 text-gray-300
          font-serif">
             Thomas Mathew
          </h1>
        <div className="fixed bg-gray-700 p-[3vmin] space-y-[1vmin] 
        shadow-2xl shadow-black
        flex flex-col text-[3vmin] font-bold text-yellow-200 shadow">

          <Link href="/"><a>Home</a></Link>  
          <Link href="/aboutme"><a className="hover:animate-pulse">About Me</a></Link>

          <Link href="/contact"><a className="hover:animate-pulse">Contact</a></Link>
        </div>
       </div> 
      
    );
}

export default SideNav;