
import Link from 'next/link';


import RedBlock from './RedBlock';
import ShowHideButton from './ShowHideButton';
import ScrollBoxBottomText from './ScrollBoxBottomText';


const MyWorksList = [
  

  {
    id:1,
    title:"10.NETWORK ACADEMY TEST(PC only)",
    url:`${process.env.PRIVATE_NETWORK_ACADEM_TEST_KEY}`
  },
  {
    id:1,
    title:"9. CTEAM App(PC only)",
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
         
         <div className={`z-20 flex justify-center
           items-center bottom-11 h-screen top-11
           absolute w-full`}>
          <div className='z-30'>

          <div className='border-4 rounded-b-2xl
           border-pink-300'>
          <ShowHideButton
             hide={hide}
             setHide={setHide}
          /></div>  

            <div className={`transition border-dotted
              delay-120 duration-300 h-[20rem] md:h-[15rem]
              lg:h-[30rem]
              ${hide ? `space-y-5 py-4 rounded-b-full shadow-lg
              shadow-black bg-gradient-to-r border-x-[1rem]
              from-black via-red-500 to-black border-pink-300
              hover:border-orange-600 transition
              delay-120 duration-300 
              overflow-y-hidden
              overflow-y-scroll lg:border-x-[3rem]
              lg:overflow-y-hidden lg:hover:overflow-y-scroll` : `
              hidden opacity-0 transition
              delay-120 duration-300`}`}>

             {MyWorksList.map((work)=>(
             <div key={work.id} className="text-yellow-400 py-[0.2rem] px-[0.2rem]
             rounded-b-full font-sans w-[60vw] flex justify-center
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
          
            
        
       </div>    
       </div>
    
    
    );
}

export default ScrollBox;