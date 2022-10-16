

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MessageIcon from '@mui/icons-material/Message';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import SideNav from '../components/SideNav';
import Link from 'next/link';
import Image from 'next/image';


function ContactForm() {
  const [state, handleSubmit] = useForm('mrgdlwkj');
  if (state.succeeded) {
      return (
        <>
         <div className='flex flex-col absolute w-[100%] h-[100%]
          justify-center items-center'>
         <Image
          src="https://media.comicbook.com/2017/02/one-piece-3-231072.png"
          layout="fill"
          className="object-cover"
         />   
        <div className='flex justify-center absolute font-bold text-4xl border
         rounded-xl bg-white opacity-90 text-center
        '>Dont worry. Its sent. You can relax now. ;D</div>
         <div className='cursor-pointer z-10 py-[2rem]
         rounded-xl bg-yellow-300 border-black border-4 
         top-[35rem] absolute text-xl'>
          <Link className="z-20" href="/">
            <a className='px-[4rem] py-[7rem] z-20'><KeyboardBackspaceIcon fontSize="large"
           className='mr-4 z-20'/>Back to Home</a></Link> 
         </div>
        </div>
        </> )
  }
  return (
    
   <div className='h-[61.22rem] bg-black fixed w-[100%]'>
        
    <form onSubmit={handleSubmit}>

      <div className='flex flex-col justify-center items-center
       text-gray-800 h-[60rem]
       absolute w-[100%] lg:text-lg'>
        <h1 className='font-bold text-5xl top-[7rem] z-10 
        absolute shadow-md shadow-black 
        w-[100%] flex justify-center text-white 
        sm:top-[4rem] xl:top-[3rem]'>CONTACT</h1>
      <div className='flex flex-col justify-center items-center space-y-2
       bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg
        shadow-pink-400
       h-[40rem] w-[90%] rounded-full relative'>

      <div className='flex flex-col items-center justify-center 
      space-y-4 text-center font-semibold
      md:flex-row md:space-y-0 md:w-[70%] lg:w-[40rem]'>

      <div className='md:flex md:flex-col md:items-center md:w-[100%]'>
      <label className='py-2' htmlFor='first'>First Name:</label>
      <input className="flex p-1 pl-4 font-light italic
      outline-none border-2 border-purple-400 rounded-3xl md:w-[90%]" 
      id="first" name="first" type="text" 
      placeholder='First name'
      autoComplete="off" required/>
      </div>
    
      <div className='md:flex md:flex-col md:items-center md:w-[100%]'>
      <label className='py-2' htmlFor='last'>Last Name:</label>
      <input className="flex p-1 pl-4 font-light italic
      outline-none border-2 border-purple-400 rounded-3xl md:w-[90%]"
       id="last" name="last" type="text" 
       placeholder='Last name'
       autoComplete="off" required/>
      </div> 
      
      </div> 

      <div className='flex flex-col space-y-[2rem] pt-[2rem] font-semibold
       items-center w-[100%] lg:w-[40rem] lg:space-y-[2rem]'>
      <div className='w-[84%] space-y-2 lg:w-[100%]'>
      <label className="p-2 mb-2" htmlFor="email">
        <MailOutlineIcon className='mb-[0.2rem]'/>&nbsp;Email Address:
      </label>
      <input className="flex outline-none 
      border-2 p-1 pl-4 font-light italic
      border-purple-400 rounded-3xl w-[100%]"
      placeholder='Enter Your Email Address'
       id="email" type="email" name="email" 
      autoComplete="off" required/>
      </div>

      <div className='w-[84%] space-y-[2%] lg:w-[100%]'>
      <label className="p-2" 
      htmlFor='number'><WhatsAppIcon/>&nbsp;Phone Number or WhatsApp<span className='text-yellow-400'>(Optional)</span>:</label>
      <input className='flex outline-none border-2 w-[100%]
      border-purple-400 rounded-3xl p-1 pl-4 font-light italic'
       id="number" type="number" name="number"
      placeholder='Enter Your Phone Number' 
      pattern="[0-9]{1,15}"
      autoComplete='off'/>
      </div>

    
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <div className='w-[73%] space-y-2 lg:w-[90%]'>
      <label className='m-4' htmlFor="message"><MessageIcon/>&nbsp;Message:</label>
      <textarea
        className='flex w-[100%] p-1 pl-4 font-light italic
        outline-none border-2 border-purple-400 rounded-3xl'
        rows={4}
        id="message"
        name="message"
        placeholder='Enter Message'
        autoComplete='off'
        required
      />
      </div>
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <div className='rounded-3xl
        py-[2%] text-center bg-blue-500 text-green-300 
       shadow shadow-black cursor-pointer z-10
       hover:bg-green-300 hover:text-blue-500'>
      <button className="z-10 px-[3rem] md:px-[5rem]" type="submit" disabled={state.submitting}>
        Submit
      </button>
      </div>
      </div>
      </div>
      </div>
    </form>
    <div className='flex flex-col items-center 
    justify-center text-white absolute z-10 w-[100%] bottom-[3rem]'>
      <h3>My GitHub:</h3>
      <Link href=""><a><GitHubIcon fontSize="large"/></a></Link>
    </div>
   </div> 
  );
}
function Contact() {
  return (
    <>
    <div>
     <div className="border-4 border-yellow-300 rounded-xl
            fixed z-50 top-[8.5rem]
            ml-[0.3rem] h-[3rem] w-[9rem]"/>  
      <SideNav/>
    </div> 

    <ContactForm />
    </>
  );
}
export default Contact;
