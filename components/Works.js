
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
    {
        id:6,
        name:"6. Boogle -> (Google inspired)",
        imgPath:"/Boogle.png",
        link:`${process.env.PRIVATE_BOOGL_KEY}`
    },
    {
        id:7,
        name:"7. Camazon -> (Amazon inspired)",
        imgPath:"/camazon1.png",
        link:`${process.env.PRIVATE_CAMAZO_KEY}`
    },
    {
        id:8,
        name:"8. Placebook -> (Facebook inspired)",
        imgPath:"/placebook.png",
        link:`${process.env.PRIVATE_PLACEBOO_KEY}`,
    },
    {
        id:9,
        name:"9. Cteam -> (Steam inspired) (desktop only)",
        imgPath:"/Cteam.png",
        link:`${process.env.PRIVATE_CTEA_KEY}`,
    },
    {
        id:10,
        name:"10. Bwitter -> (Twitter inspired) {FIGMA} [Latest]",
        imgPath:"/Bwitter-Thomas Mathew.webp",
        link:`https://dribbble.com/shots/20789355-Bwitter-twitter-inspired-by-Thomas-Mathew`,
    },
    


    
]



const Works = () => {
    
    return (
      <div className="relative flex justify-center bg-black 
        ">
        <div className="text-yellow-300
         font-serif rounded-b-full absolute
            text-2xl top-[3rem] font-bold
            border-b-4 border-dotted border-yellow-300
            shadow-lg shadow-yellow-300 px-7
            pb-4 bg-black md:text-3xl">
                My Works:</div>
        
         <div className="flex flex-col flex-wrap mx-11 
         items-center pt-[6rem] pb-[5rem] justify-evenly
          md:pt-[3rem] xl:flex-row 
          xl:gap-[4vw] xl:mt-[5rem]">
           {WorkList.map((work)=>(

            <div key={work.id} className="text-yellow-300">
            <div className="flex flex-col items-center justify-center">    
            <h1 className="text-center text-lg md:text-xl xl:text-2xl pt-[8rem]">{work.name}</h1>      
            <div className="w-[85vw] h-[29rem] shadow-xl shadow-yellow-300 rounded-full
             hover:shadow-purple-500 sm:w-[50vw] md:w-[28rem]
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