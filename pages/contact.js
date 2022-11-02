



import React from 'react';

import SideNav from '../components/SideNav';

import ContactFormFunc from '../components/ContactFormFunc';
import { useForm } from '@formspree/react';



const Contact=()=>{
  const [state, handleSubmit] = useForm('mrgdlwkj');

  return (
    <>
    <div className='relative h-screen'>
    <header className='fixed top-0 left-0 z-40'>
         
         <div className="border border-purple-500 rounded-xl
          fixed z-50 top-[8.8rem] shadow-inner shadow-black
          ml-[0.5rem] h-[2rem] w-[6.6rem] active:shadow active:shadow-black"/> 
          <SideNav/>   
    </header>
    <main className='text-[2.4vmin]'>

    <h1 className='font-bold text-2xl top-[3rem] z-30 
    fixed shadow-md shadow-black bg-black w-[100%]
    flex justify-center text-white tracking-tight
     underline underline-offset-4 md:top-[1rem] lg:top-[3rem] lg:text-4xl'>CONTACT</h1> 
    <ContactFormFunc
       state={state}
       handleSubmit={handleSubmit}
     />
    </main>
    </div>
    </>
  );
}
export default Contact;
