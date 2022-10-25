
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import RedBlock from './RedBlock';
import WhiteBlock from './WhiteBlock';




const VioletBlock = ({hide, setHide}) => {

    return (
      
        <div className='border-4 relative
       z-30 top-[60rem] rounded-tl-3xl
       rounded-br-3xl
        top-0 
           bg-gradient-to-r from-purple-500 to-black
          p-4 shadow-xl shadow-black'>
        <div className='flex flex-col border-2 shadow-inner 
        shadow-black rounded-bl-3xl rounded-tr-3xl'>
      
        <div className={styles.green}>

         <div className='right-[3rem] absolute z-50 
         shadow-xl shadow-black
          border-4 cursor-pointer'>
         <button className={hide ? `w-[100%] py-[0.2rem] px-[1rem]
          bg-red-500 hover:animate-bounce
         font-mono font-bold text-[1rem]` : `
         w-[100%] py-[0.2rem] px-[1rem]
          bg-red-500 hover:animate-bounce
         font-mono font-bold text-[1rem] focus:shadow-inner focus:shadow-black`} 
         onClick={()=>setHide(!hide)}>
          {hide ? `SHOW` : `HIDE`}</button>
         </div> 
        


         <div className=''>

            <span className="font-bold text-[3rem]">
              <span className="text-pink-600">B
          </span><span className="text-purple-700">A</span>
            <span className="text-cyan-400">M</span>M!</span> 
             &nbsp;<span className='text-white text-[1rem] lg:text-[1.3rem]'>I build these fellas:</span>
              <br/>
             <div className="absolute flex flex-wrap justify-center items-center
             text-[1rem] text-white px-3 py-2.5 lg:text-[1.5rem]">Prioritize potential over degrees?
             &nbsp;Time to join forces! &nbsp;&nbsp;
             <b className="bg-gray-500 border shadow shadow-black
              animate-pulse">
               <Link href='/contact'><a>🤝</a></Link></b>
             </div>  
         </div>  
             
         <div className='font-bold italic text-center shadow-black text-[1rem]
             underline underline-offset-[0.4rem] space-y-7 my-2 px-[1rem]
             shadow-inner flex flex-col justify-center items-center py-[4rem]'>
            <div className='text-blue-800 py-[0.2rem] px-[1rem]
             rounded-full decoration-slate-100 animate-pulse
             bg-gradient-to-b from-orange-300 to-blue-200
             shadow-md shadow-black
            hover:text-cyan-500 hover:shadow-lg hover:shadow-black
             active:shadow-inner active:shadow-black'>
             <Link href={`${process.env.PRIVATE_BLIPKAR_KEY}`}>
              <a className='text-[3vw]'><b className='text-cyan-500'>#1</b>
              BLIPKART App&nbsp;
                <span className='text-sm md:text-xl'>(Flipkart inspired)</span></a>
             </Link>
             </div>
             <div className='py-[0.2rem] rounded-full text-violet-800 
              bg-gradient-to-b from-orange-300 to-red-500 animate-pulse
              decoration-slate-100 px-[1rem]
             shadow-md shadow-black active:shadow-inner active:shadow-black
             hover:text-cyan-500 hover:shadow-lg hover:shadow-black'>
             <Link href={`${process.env.PRIVATE_MESL_KEY}`}>
              <a className='text-[3vw]'>
                <b className='text-cyan-500'>#2</b> MESLA App&nbsp;
                <span className='text-sm md:text-xl'>(Tesla inspired)</span></a>
             </Link>
             </div>
             
         </div>
         <div className='flex'>
         <RedBlock
           hide={hide}
         />  
         <WhiteBlock
           hide={hide}
         />
         </div>

      </div>  
      </div>
      </div>
      
    );
}

export default VioletBlock;