

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MessageIcon from '@mui/icons-material/Message';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
          alt=""
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
    
   <div className='relative
   h-screen bg-black text-[2.5vmin]'>
        
    <form onSubmit={handleSubmit}>

      <div className='flex flex-col justify-center items-center
       text-gray-800 h-[60rem] w-[100%] bg-black
       absolute w-[100%]'>
        <h1 className='font-bold text-5xl top-[3rem] z-30 
        fixed shadow-md shadow-black bg-black
        w-[100%] flex justify-center text-white'>CONTACT</h1>
      <div className='flex flex-col justify-center items-center space-y-2
       bg-gradient-to-r from-green-900 via-cyan-500 to-green-300 shadow-lg
        shadow-pink-400
           h-[80%] w-[95%] lg:h-[50rem] lg:w-[80%] rounded-full
           xl:w-[60%]'>

      <div className='flex flex-col items-center justify-center 
      space-y-4 text-center font-semibold
      md:flex-row md:space-y-0 md:w-[90%] lg:w-[40rem]'>

      <div className='md:flex md:flex-col md:items-center md:w-[40%] lg:w-[45%]'>
      <label className='py-2 text-orange-200' htmlFor='first'>First Name:</label>
      <input className="flex p-1 pl-4 font-light italic
      outline-none border-2 border-purple-400 rounded-3xl md:w-[90%]" 
      id="first" name="first" type="text" 
      placeholder='First name'
      autoComplete="off" required/>
      </div>
    
      <div className='md:flex md:flex-col md:items-center md:w-[40%] lg:w-[45%]'>
      <label className='py-2 text-orange-200' htmlFor='last'>Last Name:</label>
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
      <label className="p-2 mb-2 text-orange-200" htmlFor="email">
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
      <label className="p-2 text-orange-200" 
      htmlFor='number'><WhatsAppIcon/>&nbsp;Phone Number or WhatsApp<span className='text-violet-300'>
        (Optional)</span>:</label>
      <input className='flex outline-none border-2 w-[100%]
      border-purple-400 rounded-3xl p-1 pl-4 font-light italic'
       id="number" type="number" name="number"
      placeholder='Enter Your Phone or WhatsApp Number' 
      pattern="[0-9]{1,15}"
      autoComplete='off'/>
      </div>

    
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <div className='w-[73%] space-y-[2%] lg:w-[90%]'>
      <label className='m-4 text-orange-200' htmlFor="message"><MessageIcon/>&nbsp;Message:</label>
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
        py-[2%] text-center bg-gradient-to-r from-white to-gray-500
         text-violet-700 
       shadow shadow-black cursor-pointer z-10
       hover:bg-gradient-to-r hover:from-orange-300 hover:to-yellow-900 hover:text-cyan-200'>
      <button className="z-10 px-[3rem] md:px-[5rem]" type="submit" disabled={state.submitting}>
        Submit
      </button>
      </div>
      </div>
      </div>
      </div>
    </form>
    <div className='flex items-center h-[5rem] gap-10
    justify-center text-white fixed bottom-3 z-10 w-[101%]
     bg-black shadow-md shadow-black'>
      <div className='flex flex-col items-center'>GitHub:
      <Link href={`${process.env.PRIVATE_GITHU_KEY}`} className="flex flex-col">
        <a><GitHubIcon fontSize="large"/></a></Link>
      </div>
      <div className='flex flex-col items-center'>Facebook:
      <Link href={`${process.env.PRIVATE_FACEBOO_KEY}`}><a><FacebookIcon fontSize="large"/></a></Link>
      </div>
      <div className='flex flex-col items-center'>LinkedIn:
      <Link href={`${process.env.PRIVATE_LINKEDI_KEY}`}><a><LinkedInIcon fontSize="large"/></a></Link>
      </div>
    </div>

   </div> 
  );
}
function Contact() {
  return (
    <>
    <div className='relative w-[100%] h-screen'>
    <header className='fixed top-0 left-0 z-40'>
         
         <div className="border-[0.3vmin] border-purple-500 rounded-xl
          fixed z-50 top-[14.5vmin]
          ml-[2vmin] h-[5vmin] w-[17.8vmin]"/> 
          <SideNav/>   
    </header>
    <main className='text-[2.4vmin]'>
    <ContactForm />
    </main>
    </div>
    </>
  );
}
export default Contact;
