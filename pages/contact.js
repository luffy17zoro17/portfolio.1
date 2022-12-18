



import React from 'react';


import ContactFormFunc from '../components/ContactFormFunc';
import { useForm } from '@formspree/react';



const Contact=()=>{
  const [state, handleSubmit] = useForm('mrgdlwkj');

  return (
    
    <div className='relative w-[100%] h-screen bg-black top-0'>
   
    <h1 className='font-bold text-2xl top-[3.5rem] z-30
     opacity-80 
    fixed shadow-md shadow-black bg-black w-[100%]
    flex justify-center text-yellow-300 tracking-tight
     underline underline-offset-4 md:top-[1rem] lg:top-[3rem] lg:text-4xl'>CONTACT</h1> 

    <main className='
    w-[100%] text-[2.4vmin]'>

    
    <ContactFormFunc
       state={state}
       handleSubmit={handleSubmit}
     />
    </main>
    
    </div>
    
  );
}
export default Contact;
