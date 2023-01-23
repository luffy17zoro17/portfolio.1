import Head from 'next/head'
import Image from 'next/image'



import { useState } from 'react';


import GrayBlackBlock from '../components/GrayBlackBlock';
import ScrollSwipeArrow from '../components/ScrollSwipeArrow';
import ScrollBox from '../components/ScrollBox';





export default function Home() {

  const [hide,setHide] = useState(true);


  // I most likely might focus on creating more projects than 
  //  cleaning up the codes of files like these


  return (
     
    
     <div>
      
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="icon" href="https://iconarchive.com/download/i54293/crountch/one-piece-jolly-roger/Luffys-flag.ico" />
       
      </Head>
      

      <div className='fixed h-screen w-[100%]
        z-10'>
      <Image 
          src="https://cdn.pixabay.com/photo/2018/08/13/03/00/lego-3602218_960_720.jpg"
          layout="fill"
          className="object-cover absolute"  
          alt=""
        />    
      <div/>
        <GrayBlackBlock/>
          
     </div>
  
      
        <ScrollSwipeArrow/>

     <div className=''>
            <ScrollBox
               hide={hide}
               setHide={setHide}
            />
     <div>
            
      </div>
      </div>  

      </div>
  
    
  );
}


