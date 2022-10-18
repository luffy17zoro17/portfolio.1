import Link from "next/link";


const SideNav = () => {

    return (
       <div>
          <div className="rounded-br-3xl bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-black
          fixed z-30 h-[3rem] w-[23rem] left-0 flex justify-center flex-col items-center 
          font-semibold text-xl pl-[8.5rem]">
             <h1 className="fixed font-serif text-gray-200">Thomas Mathew</h1>
          </div>
        <div className="flex fixed top-0 left-0
         flex-col z-40 text-yellow-300 font-semibold text-xl space-y-[1rem]
         pt-[1rem] bg-gray-600
         h-[10rem] px-[1.3rem] shadow-xl shadow-black drop-shadow-2xl">

          <Link href="/"><a>Home</a></Link>  
          <Link href="/aboutme"><a className="hover:animate-pulse">About Me</a></Link>

          <Link href="/contact"><a className="hover:animate-pulse">Contact</a></Link>
        </div>
       </div> 
    );
}

export default SideNav;