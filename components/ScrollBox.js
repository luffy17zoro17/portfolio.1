
import Link from 'next/link';
import styles from '../styles/Home.module.css';

import RedBlock from './RedBlock';
import ShowHideButton from './ShowHideButton';
import ScrollBoxBottomText from './ScrollBoxBottomText';


const MyWorksList = [
  {
    id:1,
    title:"#1. BLIPKART App (Flipkart inspired)",
    url:`${process.env.PRIVATE_BLIPKAR_KEY}`,
  },
  {
    id:2,
    title:"#2. MESLA App (Tesla inspired)",
    url:`${process.env.PRIVATE_MESL_KEY}`,
  },
  {
    id:3,
    title:"#3. SINKEDIN App (LinkedIn inspired)",
    url:`${process.env.PRIVATE_SINKED_KEY}`,
  },
  {
     id:4,
     title:"#4. DOTUBE App [LATEST] (Youtube inspired)",
     url:`${process.env.PRIVATE_DOTUB_KEY}`
  }
]





const ScrollBox = ({hide, setHide}) => {

    return (
      
        <div className='border-4 relative
       z-30 top-[62rem] rounded-tl-[11rem]
       rounded-br-[11rem]
           bg-gradient-to-r from-red-400 to-black
          p-4 shadow-lg shadow-black md:bottom-[85rem] lg:bottom-[60rem]
            sm:mx-[5rem] md:mx-[7rem] lg:mx-[11rem]
             xl:mx-[18rem]'>
        <div className='flex flex-col border-2 shadow-inner 
        shadow-black rounded-br-[11rem] rounded-tl-[11rem]'>
      
        <div className={styles.green}>

         <ShowHideButton
             hide={hide}
             setHide={setHide}
          /> 
      
         <div className=''>
              
         </div>  
             
         <div className='font-bold text-center shadow-black
             bg-gradient-to-r from-white to-black

             shadow-md shadow-black active:shadow-inner active:shadow-black
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
            <div className='space-y-5'>

             {MyWorksList.map((work)=>(
             <div key={work.id} className="text-yellow-400 py-[0.2rem] px-[1rem]
             rounded-full font-mono w-[64vw]
             bg-gradient-to-b from-gray-400 to-gray-800
             shadow-md shadow-black border-4
            hover:text-black hover:shadow-md hover:shadow-yellow-800 hover:animate-bounce
             active:shadow-inner active:shadow-black mx-5 
             sm:w-[54vw] lg:w-[44vw] xl:text-[2rem]"> 
             <Link href={work.url}>
                 {work.title}
             </Link>
             </div>
             ))}
             </div>
         </div>

          <ScrollBoxBottomText/>
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