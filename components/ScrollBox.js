
import Link from 'next/link';
import styles from '../styles/Home.module.css';

import RedBlock from './RedBlock';
import ShowHideButton from './ShowHideButton';
import ScrollBoxBottomText from './ScrollBoxBottomText';





const ScrollBox = ({hide, setHide}) => {

    return (
      
        <div className='border-4 relative
       z-30 top-[62rem] rounded-tl-[11rem]
       rounded-br-[11rem]
           bg-gradient-to-r from-yellow-700 to-black
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

             underline underline-offset-[0.4rem] space-y-7 rounded-tl-[7rem]
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
            <div className='text-blue-800 py-[0.2rem] px-[1rem]
             rounded-full decoration-slate-100 font-mono
             bg-gradient-to-b from-orange-300 to-blue-200
             shadow-md shadow-black
            hover:text-black hover:shadow-md hover:shadow-yellow-800 hover:animate-bounce
             active:shadow-inner active:shadow-black mx-5'>
             <Link href={`${process.env.PRIVATE_BLIPKAR_KEY}`}>
              <a className='text-[1.2rem] md:text-2xl lg:text-3xl'>
                <b className='text-black'>#1 </b>
              BLIPKART App&nbsp;<br className='sm:hidden'/>
                <span className='text-sm md:text-lg lg:text-2xl'>(Flipkart inspired)</span></a>
             </Link>
             </div>
             <div className='py-[0.2rem] rounded-full text-violet-800 
              bg-gradient-to-b from-orange-300 to-red-500 font-mono
              decoration-slate-100 px-[1rem]

              shadow-md shadow-black active:shadow-inner active:shadow-black
             hover:text-black hover:shadow-md hover:shadow-yellow-800 hover:animate-bounce
             mx-5'>
             <Link href={`${process.env.PRIVATE_MESL_KEY}`}>
              <a className='text-[1.2rem] md:text-2xl lg:text-3xl'>
                <b className='text-black'>#2</b> MESLA App&nbsp;
                <span className='text-sm md:text-lg lg:text-2xl'>
                  (Tesla inspired)</span></a>
             </Link>
             </div>
             <div className='rounded-full pb-1 pt-2 px-[1rem] font-mono      
                bg-gradient-to-t from-yellow-200 to-green-200 text-green-900
                shadow-md shadow-black active:shadow-inner active:shadow-black
             hover:text-black hover:shadow-md hover:shadow-yellow-800 hover:animate-bounce mx-5'>
              <Link href={`${process.env.PRIVATE_SINKED_KEY}`}>
              <a className='text-[1.2rem] md:text-2xl lg:text-3xl'>
                <b className='text-black'>#3</b> SINKEDIN App <b className='text-[0.7rem] 
                md:text-[1rem]'>
                  (LATEST!)</b>
                <br className='lg:hidden'/>&nbsp;
                <span className='text-sm md:text-lg lg:text-2xl'>
                  (LinkedIn inspired)</span></a>
               </Link>
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