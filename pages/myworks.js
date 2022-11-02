import Image from "next/image";
import Link from "next/link";
import SideNav from "../components/SideNav";



const Works = [
    {
        id:1,
        name:"1. Blipkart -> (flipkart inspired)",
        imgPath:"/blipkart.png",                                  
        link:`${process.env.PRIVATE_BLIPKAR_KEY}`,
        
    },
    {
        id:2,
        name:"2. Mesla -> (tesla inspired)",
        imgPath:"/mesla.png",
        link:`${process.env.PRIVATE_MESL_KEY}`
    }
]





const MyWorks=()=>{
    return (
      <div className="relative bg-black lg:h-screen">
         <header className='fixed top-0 left-0 z-40'>
         
          <div className="border border-purple-500 rounded-xl
          fixed z-50 top-[4.7rem] shadow-inner shadow-black
          ml-[0.5rem] h-[2rem] w-[6.6rem] active:shadow active:shadow-black"/> 
          <SideNav/>   
         </header>
         <h2 className="fixed border-[1rem] w-[100%] z-30 top-[2.1rem]
          bg-gray-400 shadow-xl shadow-black
          text-center text-white font-bold text-[1.5rem] xl:text-[2rem]">
            <span className="text-pink-300 font-serif
            shadow-xl shadow-black px-2 py-1">
                My Works:</span></h2>
         <div className="flex flex-col
         items-center pt-[11rem] pb-[5rem] justify-evenly md:pt-[8rem]
         lg:flex-row">
           {Works.map((work)=>(

            <div key={work.id} className="text-white">
            <div className="flex flex-col items-center justify-center mt-[-5rem]">    
            <h1 className="text-center text-lg lg:text-2xl pt-[8rem]">{work.name}</h1>      
            <div className="w-[85vw] h-[29rem] shadow-xl shadow-orange-400
             hover:shadow-green-300 sm:w-[50vw] md:w-[28rem]"> 
            <Link href={work.link}>
            <Image
             src={work.imgPath}
             alt=""
             priority="true"
             className="object-contain cursor-pointer
              hover:scale-[103%]
             hover:animate-pulse"
             layout="responsive"
             height={1000}
             width={1000}
            />
            </Link>
            </div>
            </div>
           
            </div>
            ))}
         </div>

      </div>  
    );
}

export default MyWorks;