
import Link from 'next/link';


import RedBlock from './RedBlock';
import ShowHideButton from './ShowHideButton';
import ScrollBoxBottomText from './ScrollBoxBottomText';


const MyWorksList = [

  {
    id:1,
    title:"9. CTEAM App[latest](desktop only)",
    url:`${process.env.PRIVATE_CTEA_KEY}`
  },
  {
    id:2,
    title:"8. PLACEBOOK App",
    url:`${process.env.PRIVATE_PLACEBOO_KEY}`
  },
  {
    id:3,
    title:"7. CAMAZON App",
    url:`${process.env.PRIVATE_CAMAZO_KEY}`
  },
  {
    id:4,
    title:"6. BOOGLE App",
    url:`${process.env.PRIVATE_BOOGL_KEY}`
  },
  {
    id:5,
    title:"5. CHATSAPP App",
    url:`${process.env.PRIVATE_CHATSAP_KEY}`
  },
  {
    id:6,
    title:"4. DOTUBE App",
    url:`${process.env.PRIVATE_DOTUB_KEY}`
  },
  {
    id:7,
    title:"3. SINKEDIN App",
    url:`${process.env.PRIVATE_SINKED_KEY}`,
  },
  {
    id:8,
    title:"2. MESLA App",
    url:`${process.env.PRIVATE_MESL_KEY}`,
  },
  {
    id:9,
    title:"1. BLIPKART App",
    url:`${process.env.PRIVATE_BLIPKAR_KEY}`,
  },
 

]





const ScrollBox = ({hide, setHide}) => {

    return (
         
         <div className='z-30 flex justify-center'>
          <div className='absolute z-30 top-[100rem]'>
           <div className='relative flex justify-center flex-col items-center h-screen'>

            <div className='space-y-5 py-4 rounded-b-full shadow-lg
              shadow-black bg-gradient-to-r border-x-[1rem]
              from-black via-red-500 to-black border-pink-300
              hover:border-orange-600
              absolute mt-[5rem] h-[20rem] overflow-y-hidden
              overflow-y-scroll lg:h-[30rem] lg:border-x-[3rem]
              lg:overflow-y-hidden lg:hover:overflow-y-scroll'>

             {MyWorksList.map((work)=>(
             <div key={work.id} className="text-yellow-400 py-[0.2rem] px-[0.2rem]
             rounded-b-full font-sans w-[66vw] flex justify-center
             bg-gradient-to-b from-gray-400 to-gray-800
             shadow-md shadow-black
            hover:text-black hover:shadow-md hover:shadow-yellow-800
             active:shadow-inner active:shadow-black mx-5 
             sm:w-[54vw] lg:w-[44vw] lg:text-[1.5rem]
              xl:text-[1.9rem]"> 
             <Link href={work.url}>
                 {work.title}
             </Link>
             </div>
             ))}
             </div>

             <ScrollBoxBottomText hide={hide}/>
           
              <RedBlock
                hide={hide}
              />  
          
            <ShowHideButton
             hide={hide}
             setHide={setHide}
          /> 
          </div>
       </div>    
       </div>
    
    
    );
}

export default ScrollBox;