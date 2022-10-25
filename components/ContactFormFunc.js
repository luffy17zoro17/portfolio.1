import { useForm, ValidationError } from '@formspree/react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MessageIcon from '@mui/icons-material/Message';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';
import Image from 'next/image';

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';



const ContactFormFunc=({state,handleSubmit})=>{
    
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
              <a className='px-[4rem] py-[7rem] z-20 hover:text-purple-700'>
                <KeyboardBackspaceIcon fontSize="large"
             className='mr-4 z-20'/>Back to Home</a></Link> 
           </div>
          </div>
          </> )
    }
    return (
  
    
     <div className='relative flex justify-center 
     flex-col items-center h-[65rem] bg-black
      w-[100%] text-[1rem] md:h-[55rem]'>
      <div className='static shadow-lg border-black p-6 py-[3rem]
          shadow-pink-600 rounded-full border-4 
          bg-gradient-to-b from-orange-500 to-blue-700'>   
      <form onSubmit={handleSubmit}>
  
        <div className='flex flex-col justify-center items-center'>
          <h1 className='font-bold text-4xl top-[8rem] z-30 
          fixed shadow-md shadow-black bg-black
          flex justify-center text-white md:top-[3rem]'>CONTACT</h1>
        <div className='flex flex-col justify-center items-center space-y-2 
        text-green-600'>
        <div className='flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center
        space-y-[2rem] text-center font-semibold md:bg-gradient-to-b md:from-orange-500 
        md:to-orange-700
        md:flex-row md:space-y-[0rem] md:space-x-[2rem] 
        md:border-4 md:rounded-full md:px-6 md:py-6 
        md:border-black md:bg-white md:z-0 md:border-b-0'>
  
      
      
        <div className='md:flex md:flex-col md:items-center'>
         
        <label className='z-20 py-2 text-white' htmlFor='first'>First Name:</label>
        <input className="shadow-inner shadow-black
         flex p-1 pl-4 font-light italic z-20
         placeholder-green-500
        outline-none border-2 border-purple-400 rounded-3xl" 
        id="first" name="first" type="text" 
        placeholder='First name'
        autoComplete="off" required/>
        </div>
      
        <div className='md:flex md:flex-col md:items-center'>
        <label className='py-2 text-white' htmlFor='last'>Last Name:</label>
        <input className="shadow-inner placeholder-green-500
         shadow-black flex p-1 pl-4 font-light italic
        outline-none border-2 border-purple-400 rounded-3xl"
         id="last" name="last" type="text" 
         placeholder='Last name'
         autoComplete="off" required/>
        </div> 
        
        </div> 
  
        <div className='flex flex-col space-y-[2rem] pt-[2rem] font-semibold'>
        <div className='space-y-[0.3rem]'>
        <label className="p-2 text-white" htmlFor="email">
          <MailOutlineIcon className='mb-[0.2rem]'/>&nbsp;Email Address:
        </label>
        <input className="flex outline-none shadow-inner
         shadow-black
        border-2 p-1 pl-4 font-light italic truncate
        border-purple-400 rounded-3xl placeholder-green-500 w-[100%]"
        placeholder='Enter Your Email Address'
         id="email" type="email" name="email" 
        autoComplete="off" required/>
        </div>
  
        <div className='space-y-[0.3rem]'>
        <label className="p-2 text-white" 
        htmlFor='number'><WhatsAppIcon/>&nbsp;
        Phone Number or WhatsApp<span className='text-green-200'>
          (Optional)</span>:</label>
        <input className='flex outline-none border-2 
        shadow-inner shadow-black truncate w-[100%] placeholder-green-500
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
        <div className='space-y-[0.3rem]'>
        <label className='m-4 text-white' 
        htmlFor="message"><MessageIcon/>&nbsp;Message:</label>
        <textarea
          className='flex p-1 pl-4 font-light italic shadow-inner
           shadow-black
          outline-none border-2 border-purple-400 rounded-3xl
          placeholder-green-500 w-[100%]'
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
           text-orange-900 font-mono text-xl
         shadow-md shadow-black cursor-pointer z-10 
         hover:bg-gradient-to-r hover:from-orange-300 hover:to-yellow-900 hover:text-white 
         active:shadow-inner active:shadow-black'>
        <button className="z-10 px-[3rem] md:px-[5rem]" type="submit" disabled={state.submitting}>
          Submit
        </button>
        </div>
        </div>
        </div>
        </div>
        </div>
      </form>
      </div>
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

  export default ContactFormFunc;