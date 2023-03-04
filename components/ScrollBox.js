
import Link from 'next/link';


import RedBlock from './RedBlock';
import ShowHideButton from './ShowHideButton';
import ScrollBoxBottomText from './ScrollBoxBottomText';
import { useSelector } from 'react-redux';
import { selectScroll } from '../reducers/autoScroll/autoScroll';


const MyWorksList = [
 
  

  {
    id:1,
    title:"11.Bwitter UI(FIGMA)",
    url:`https://dribbble.com/shots/20789355-Bwitter-twitter-inspired-by-Thomas-Mathew`
  },
  {
    id:2,
    title:"10.NETWORK ACADEMY TEST(PC only)",
    url:`${process.env.PRIVATE_NETWORK_ACADEM_TEST_KEY}`
  },
  {
    id:3,
    title:"9. CTEAM App(PC only)",
    url:`${process.env.PRIVATE_CTEA_KEY}`
  },
  {
    id:4,
    title:"8. PLACEBOOK App",
    url:`${process.env.PRIVATE_PLACEBOO_KEY}`
  },
  {
    id:5,
    title:"7. CAMAZON App",
    url:`${process.env.PRIVATE_CAMAZO_KEY}`
  },
  {
    id:6,
    title:"6. BOOGLE App",
    url:`${process.env.PRIVATE_BOOGL_KEY}`
  },
  {
    id:7,
    title:"5. CHATSAPP App",
    url:`${process.env.PRIVATE_CHATSAP_KEY}`
  },
  {
    id:8,
    title:"4. DOTUBE App",
    url:`${process.env.PRIVATE_DOTUB_KEY}`
  },
  {
    id:9,
    title:"3. SINKEDIN App",
    url:`${process.env.PRIVATE_SINKED_KEY}`,
  },
  {
    id:10,
    title:"2. MESLA App",
    url:`${process.env.PRIVATE_MESL_KEY}`,
  },
  {
    id:11,
    title:"1. BLIPKART App",
    url:`${process.env.PRIVATE_BLIPKAR_KEY}`,
  },
 

]





const ScrollBox = ({hide, setHide}) => {
    
    const autoScrollValue = useSelector(selectScroll); 

    return (
         
         <div className={`z-20 flex justify-center
           items-center bottom-11 h-screen top-11
           absolute w-full`}>
          <div className={`z-30 ease-in
           transition delay-900 duration-900
           
            `}>

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
              hover:shadow-xl hover:shadow-orange-400
              delay-120 duration-300 
              overflow-y-hidden
              overflow-y-scroll lg:border-x-[3rem]
              lg:overflow-y-hidden lg:hover:overflow-y-scroll` : `
              hidden opacity-0 transition
              delay-120 duration-300`}`}>

             {MyWorksList.map((work)=>(
             <Link key={work.id} href={work.url}> 
             <div className="text-pink-300 py-[0.2rem] px-[0.2rem]
             rounded-b-full font-sans w-[75vw] flex justify-center
             bg-gradient-to-b from-gray-400 to-gray-800
             transition delay-120 duration-300
             shadow-md shadow-black cursor-pointer
            hover:text-orange-500 hover:shadow-md hover:shadow-yellow-800
             active:shadow-inner active:shadow-black mx-5 
             sm:w-[54vw] lg:w-[44vw] lg:text-[1.5rem]
              xl:text-[1.9rem]"> 
                 {work.title}          
             </div>
             </Link>
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