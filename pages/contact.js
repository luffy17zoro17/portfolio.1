



import React from 'react';

import SideNav from '../components/SideNav';

import ContactFormFunc from '../components/ContactFormFunc';
import { useForm } from '@formspree/react';



const Contact=()=>{
  const [state, handleSubmit] = useForm('mrgdlwkj');

  return (
    <>
    <div className='relative w-[100%] h-screen'>
    <header className='fixed top-0 left-0 z-40'>
         
         <div className="border border-purple-500 rounded-xl
          fixed z-50 top-[8.8rem] shadow-inner shadow-black
          ml-[0.5rem] h-[2rem] w-[6.6rem] active:shadow active:shadow-black"/> 
          <SideNav/>   
    </header>
    <main className='text-[2.4vmin]'>
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
