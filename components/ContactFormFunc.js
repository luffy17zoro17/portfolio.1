

import Link from 'next/link';
import Image from 'next/image';

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ContactForm from "./ContactForm";
import ContactFooter from './ContactFooter';



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
     flex-col items-center bg-black h-[55rem]
      w-[100%] text-[1rem]'>
      <div className='shadow-lg border-black p-6
          shadow-pink-600 rounded-full border-4 mt-[4rem]
          bg-gradient-to-b from-orange-500 to-blue-700 py-[3rem] md:mt-[2rem]'>  
         <ContactForm
            state={state} 
            handleSubmit={handleSubmit}
         />  
      
      </div>
      <ContactFooter/>
  
     </div> 
    
    );
  }

  export default ContactFormFunc;