
import Link from 'next/link';
import styles from '../styles/Home.module.css';

import RedBlock from './RedBlock';





const VioletBlock = ({hide, setHide}) => {

    return (
      
        <div className='border-4 relative
       z-30 top-[62rem] rounded-tl-[11rem]
       rounded-br-[11rem]
           bg-gradient-to-r from-purple-500 to-black
          p-4 shadow-lg shadow-black md:bottom-[85rem] lg:bottom-[60rem]
            sm:mx-[5rem] md:mx-[7rem] lg:mx-[11rem]
             xl:mx-[18rem]'>
        <div className='flex flex-col border-2 shadow-inner 
        shadow-black rounded-br-[11rem] rounded-tl-[11rem]'>
      
        <div className={styles.green}>

         <div className='right-[3rem] absolute z-50 
         shadow-xl shadow-black
          border-4 cursor-pointer lg:text-2xl'>
         <button className={hide ? `w-[100%] px-[1rem]
          bg-red-500 hover:animate-bounce
         font-mono font-bold` : `
         w-[100%] px-[1rem]
          bg-red-500 hover:animate-bounce
         font-mono font-bold text-[1rem] focus:shadow-inner focus:shadow-black`} 
         onClick={()=>setHide(!hide)}>
          {hide ? `SHOW` : `HIDE`}</button>
         </div> 
        


         <div className=''>
              
         </div>  
             
         <div className='font-bold italic text-center shadow-black
             bg-gradient-to-r from-white to-black

             shadow-md shadow-black active:shadow-inner active:shadow-black
             hover:text-cyan-500 hover:shadow-md hover:shadow-cyan-400 hover:animate-none

             underline underline-offset-[0.4rem] space-y-7 rounded-tl-[7rem]
             rounded-br-[7rem]
             shadow-inner flex flex-col justify-center items-center py-[1.3rem]
             '>

            <div className='flex flex-col px-3'>
            <span className="font-bold text-[2.3rem] rounded-tl-xl
              shadow-inner shadow-black bg-white lg:text-[2.5rem]">
              <span className="text-pink-600">B
            </span><span className="text-purple-700">A</span>
            <span className="text-cyan-400">M</span>M!</span> 
             <span className='p-3 text-white text-[1rem] shadow-inner
              shadow-black rounded-br-xl md:text-[1.2rem]
              lg:text-[1.3rem]'>I build these fellas:
             </span>
             </div>  
            <div className='text-blue-800 py-[0.2rem] px-[1rem]
             rounded-full decoration-slate-100 animate-pulse
             bg-gradient-to-b from-orange-300 to-blue-200
             shadow-md shadow-black
            hover:text-cyan-500 hover:shadow-md hover:shadow-cyan-400 hover:animate-none
             active:shadow-inner active:shadow-black'>
             <Link href={`${process.env.PRIVATE_BLIPKAR_KEY}`}>
              <a className='text-[1.2rem] md:text-2xl lg:text-3xl'><b className='text-cyan-500'>#1</b>
              BLIPKART App&nbsp;
                <span className='text-sm md:text-lg lg:text-2xl'>(Flipkart inspired)</span></a>
             </Link>
             </div>
             <div className='py-[0.2rem] rounded-full text-violet-800 
              bg-gradient-to-b from-orange-300 to-red-500 animate-pulse
              decoration-slate-100 px-[1rem]

              shadow-md shadow-black active:shadow-inner active:shadow-black
             hover:text-cyan-500 hover:shadow-md hover:shadow-cyan-400 hover:animate-none
             '>
             <Link href={`${process.env.PRIVATE_MESL_KEY}`}>
              <a className='text-[1.2rem] md:text-2xl lg:text-3xl'>
                <b className='text-cyan-500'>#2</b> MESLA App&nbsp;
                <span className='text-sm md:text-lg lg:text-2xl'>
                  (Tesla inspired)</span></a>
             </Link>
             </div>
             <div className='rounded-full pb-1 pt-2 px-[1rem]      
                bg-gradient-to-r from-yellow-200 to-green-200
                animate-pulse
                shadow-md shadow-black active:shadow-inner active:shadow-black
             hover:text-cyan-500 hover:shadow-md hover:shadow-cyan-400 hover:animate-none'>
              <Link href={`${process.env.PRIVATE_SINKED_KEY}`}>
              <a className='text-[1.2rem] md:text-2xl lg:text-3xl'>
                <b className='text-cyan-500'>#3</b> SINKEDIN App <b className='text-[0.7rem] 
                md:text-[1rem]'>
                  (LATEST!)</b>
                <br className='lg:hidden'/>&nbsp;
                <span className='text-sm md:text-lg lg:text-2xl'>
                  (LinkedIn inspired)</span></a>
               </Link>
               </div>

             
         </div>

         <span className="flex flex-wrap
             text-[1rem] text-white px-3 py-2.5 lg:text-[1.5rem]">
             <span>Prioritize potential over degrees?<br/>
             &nbsp;Time to join forces&nbsp;
             <span className="bg-gray-500 border shadow shadow-black
              animate-pulse hover:animate-none hover:shadow-lg hover:shadow-red-500">
               <Link href='/contact'><a>🤝</a></Link>
             </span></span>
          </span> 
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

export default VioletBlock;