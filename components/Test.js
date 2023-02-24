
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
    {
        id:2,
        name:"2. Network Academy -> (Network Academy Test Project)[Latest](desktop only)",
        details:"A Test from the Company 'Network Academy' that I completed. Its a 'Desktop only' website.",
        imgPath:"/NetworkAcademyTest.png",
        link:`${process.env.PRIVATE_NETWORK_ACADEM_TEST_KEY}`
    },

]



const TestProj = () => {

    return (
       <div className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500
        flex justify-center w-[100%] fixed h-screen overflow-y-scroll"> 
        <div className="">
         <h2 className="border-x-[1rem] z-30 top-[2.1rem] flex justify-center
          bg-gray-100 shadow-xl shadow-black border-yellow-400
          text-center text-white font-bold text-[1.5rem] md:top-0
          md:border-x-[0.7rem] md:absolute md:justify-center md:flex md:border-4
           md:w-full md:left-0
          xl:text-[2rem]">
            <span className="text-green-800 font-serif
            rounded-lg border-x-[2rem] z-20 bg-yellow-300
            shadow shadow-black px-2 py-1 fixed top-[2rem] md:top-0">
                Test<br/>Projects:</span>
         </h2>
         <div className="flex flex-col flex-wrap
         items-start pt-[6rem] pb-[5rem] justify-evenly
          md:pt-[3rem] xl:flex-row 
          xl:space-x-[5vw] xl:mt-[5rem]
          xl:gap-[10rem]">
           {TestProjectsList.map((work)=>(

            <div key={work.id} 
            className="text-black w-[25rem] text-center">
            <div className="flex flex-col items-center justify-center">    
            <h1 className="text-center w-[24rem] text-lg font-medium
            md:text-xl xl:text-2xl pt-[8rem]">
                {work.name}
            </h1>  
            <p className="pt-5 px-3">{work.details}</p>    
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
      </div>
    );

}


export default TestProj