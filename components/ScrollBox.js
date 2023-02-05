
import Link from 'next/link';


import RedBlock from './RedBlock';
import ShowHideButton from './ShowHideButton';
import ScrollBoxBottomText from './ScrollBoxBottomText';


const MyWorksList = [
  
  {
    id:1,
    title:"#8. PLACEBOOK App [LATEST]",
    url:`${process.env.PRIVATE_PLACEBOO_KEY}`
  },
  {
    id:2,
    title:"#7. CAMAZON App",
    url:`${process.env.PRIVATE_CAMAZO_KEY}`
  },
  {
    id:3,
    title:"#6. BOOGLE App",
    url:`${process.env.PRIVATE_BOOGL_KEY}`
  },
  {
    id:4,
    title:"#5. CHATSAPP App",
    url:`${process.env.PRIVATE_CHATSAP_KEY}`
  },
  {
    id:5,
    title:"#4. DOTUBE App",
    url:`${process.env.PRIVATE_DOTUB_KEY}`
  },
  {
    id:6,
    title:"#3. SINKEDIN App",
    url:`${process.env.PRIVATE_SINKED_KEY}`,
  },
  {
    id:7,
    title:"#2. MESLA App",
    url:`${process.env.PRIVATE_MESL_KEY}`,
  },
  {
    id:8,
    title:"#1. BLIPKART App",
    url:`${process.env.PRIVATE_BLIPKAR_KEY}`,
  },
 

]





const ScrollBox = ({hide, setHide}) => {

    return (
     
       <div className='absolute h-screen
       w-[100%] flex flex-col items-center 
        justify-center left-0'>
        <div className='absolute top-[180%] bottom-0
         flex justify-center w-full'>
        <div className={`relative
        
        border-x-[2.5rem]
          border-transparent z-30
         
        shadow-xl shadow-black
         rounded-[2rem] md:border-x-[1.6rem] xl:rounded-[6.9rem]
        
          ${hide===false ? 
            `bg-gradient-to-t from-red-500 via-gray-800 to-transparent
             h-[50rem]
            w-[95%] sm:w-[35rem] md:w-[40rem] lg:w-[60rem]`: 
            `bg-gradient-to-t from-gray-800 via-red-500 to-transparent w-full
              h-[45rem] w-[95%] sm:w-[35rem] md:w-[40rem] lg:w-[60rem]`}
          `}>

         <ShowHideButton
             hide={hide}
             setHide={setHide}
          /> 
      
           
         <div className='font-bold text-center shadow-black
             bg-gradient-to-r from-white to-black

             shadow shadow-black active:shadow-inner active:shadow-black
             hover:text-yellow-900 hover:shadow-md hover:shadow-yellow-600 hover:animate-none

            space-y-7 rounded-tl-[7rem]
             rounded-br-[7rem]
             shadow-inner flex flex-col justify-center items-center py-[1.3rem]
             '>

            <div className='flex flex-col px-3 italic'>
            <span className="font-bold text-[2.3rem] rounded-tl-xl
              shadow-inner shadow-black bg-yellow-500 lg:text-[2.5rem]">
              <span className="text-pink-900">B
            </span><span className="text-purple-700">A</span>
            <span className="text-gray-600">M</span>M!</span> 
             <span className='p-3 text-white text-[1rem] shadow-inner
              shadow-black rounded-br-xl md:text-[1.2rem]
              lg:text-[1.3rem]'>I build these fellas:
             </span>
             </div>  

            <div className='relative flex justify-center'>
            <div className='space-y-5
              absolute mt-[5rem] h-[20rem] overflow-y-hidden
              overflow-y-scroll'>

             {MyWorksList.map((work)=>(
             <div key={work.id} className="text-yellow-400 py-[0.2rem] px-[1rem]
             rounded-full font-mono w-[64vw]
             bg-gradient-to-b from-gray-400 to-gray-800
             shadow-md shadow-black border-4
            hover:text-black hover:shadow-md hover:shadow-yellow-800 hover:animate-bounce
             active:shadow-inner active:shadow-black mx-5 
             sm:w-[54vw] lg:w-[44vw] lg:text-[2rem]"> 
             <Link href={work.url}>
                 {work.title}
             </Link>
             </div>
             ))}
             </div>
            </div> 
         </div>

          <ScrollBoxBottomText hide={hide}/>
         <div className='flex'>
         <RedBlock
           hide={hide}
         />  
         </div>

      </div>  
      </div>
      </div>
    
      
    );
}

export default ScrollBox;