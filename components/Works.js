
import Image from "next/image";
import Link from "next/link";




const WorkList = [
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
    },
    {
        id:3,
        name:"3. SinkedIn -> (LinkedIn inspired)",
        imgPath:"/SinkedIn.png",
        link:`${process.env.PRIVATE_SINKED_KEY}`
    
    },
    {
        id:4,
        name:"4. DoTube -> (Youtube inspired)",
        imgPath:"/dotube.png",
        link:`${process.env.PRIVATE_DOTUB_KEY}`
    },
    {
        id:5,
        name:"5. ChatsApp -> (WhatsApp inspired) [Latest]",
        imgPath:"/chatsapp.png",
        link:`${process.env.PRIVATE_CHATSAP_KEY}`
    },
]



const Works = () => {
    
    return (
      <div className="relative flex justify-center bg-black">
        
         <h2 className="fixed border-x-[1rem]  w-[40%] z-30 top-[2.1rem]
          bg-gray-400 shadow-xl shadow-black
          text-center text-white font-bold text-[1.5rem] md:top-0
          md:border-x-[0.7rem] 
          xl:text-[2rem]">
            <span className="text-orange-400 font-serif
            shadow-xl shadow-black px-2 py-1">
                My<br/>Works:</span></h2>
         <div className="flex flex-col flex-wrap mx-11
         items-center pt-[6rem] pb-[5rem] justify-evenly
          md:pt-[3rem] xl:flex-row 
          xl:space-x-[5vw] xl:mt-[5rem]">
           {WorkList.map((work)=>(

            <div key={work.id} className="text-white">
            <div className="flex flex-col items-center justify-center">    
            <h1 className="text-center text-lg md:text-xl xl:text-2xl pt-[8rem]">{work.name}</h1>      
            <div className="w-[85vw] h-[29rem] shadow-xl shadow-orange-400 rounded-full
             hover:shadow-green-300 sm:w-[50vw] md:w-[28rem]
              "> 
            <Link href={work.link}>
             <a>   
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
            </a>
            </Link>
            </div>
            </div>
           
            </div>
            ))}
         </div>

      </div>  
    );
}
        

export default Works;