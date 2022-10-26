import Head from 'next/head'
import Image from 'next/image'

import SideNav from '../components/SideNav';

import { useState } from 'react';

import VioletBlock from '../components/VioletBlock';
import YellowGreenBlock from '../components/YellowGreenBlock';
import ScrollSwipeArrow from '../components/ScrollSwipeArrow';





export default function Home() {

  const [hide,setHide] = useState(true);


  return (
     
    
     <div className='relative w-[100%] h-[100rem]'>
      <header className='fixed top-0 left-0 z-20'>
         
         <div className="border border-purple-500 rounded-xl
          fixed z-50 top-[1rem] shadow shadow-black
          ml-[0.6rem] h-[2rem] w-[8rem] active:shadow-inner active:shadow-black"/> 
          <SideNav/>   
      </header>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="icon" href="https://iconarchive.com/download/i54293/crountch/one-piece-jolly-roger/Luffys-flag.ico" />
       
      </Head>
      

      <div className='fixed h-screen w-[100%]
        z-10'>
      <Image 
          src="https://img.freepik.com/free-photo/fun-spelled-word-with-plastic-blocks-background_53876-14686.jpg?w=1380&t=st=1666560257~exp=1666560857~hmac=e50e8a2bdc079968ad4cb2041b32bbf530ed40168ff383cb736606f08e238ab8"
          layout="fill"
          className="object-cover absolute"  
          alt=""
        />
     
        
        <div className='shadow-inner shadow-black
         absolute flex w-[100%] h-[100%]'/>
        
        <YellowGreenBlock/>
          
        </div>
  
      
        <ScrollSwipeArrow/>

      <div>
            <VioletBlock
               hide={hide}
               setHide={setHide}
            />
      <div>
            
      </div>
      </div>  

      </div>
  
    
  );
}


