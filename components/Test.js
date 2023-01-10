
import Image from "next/image";
import Link from "next/link";




const TestProjectsList = [
    {
        id:1,
        name:"1. Lendsqr -> (Lendsqr Test Project)",
        details:"A Test from the Company 'LENDSQR' that I attempted.",
        imgPath:"/lendsqr.png",                                  
        link:`${process.env.PRIVATE_TEST_LENDSQ_KEY}`,
        
    },

]



const TestProj = () => {

    return (
        <div className="relative flex justify-center bg-yellow-400 xl:h-screen">
        
         <h2 className="fixed border-x-[1rem]  w-[40%] z-30 top-[2.1rem]
          bg-gray-100 shadow-xl shadow-black border-green-400
          text-center text-white font-bold text-[1.5rem] md:top-0
          md:border-x-[0.7rem] 
          xl:text-[2rem]">
            <span className="text-green-800 font-serif
            shadow-xl shadow-black px-2 py-1">
                Test<br/>Projects:</span></h2>
         <div className="flex flex-col flex-wrap mx-11
         items-center pt-[6rem] pb-[5rem] justify-evenly
          md:pt-[3rem] xl:flex-row 
          xl:space-x-[5vw] xl:mt-[5rem]">
           {TestProjectsList.map((work)=>(

            <div key={work.id} className="text-black">
            <div className="flex flex-col items-center justify-center">    
            <h1 className="text-center text-lg md:text-xl xl:text-2xl pt-[8rem]">{work.name}</h1>  
            <p className="pt-5">{work.details}</p>    
            <div className="w-[85vw] h-[29rem] shadow-xl shadow-orange-400 rounded-full
             hover:shadow-green-300 sm:w-[50vw] md:w-[28rem]
              "> 
            <Link href={work.link}>
             <a>
            <Image
             src={work.imgPath}
             alt=""
             priority="true"
             className="object-contain 
              cursor-pointer
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


export default TestProj