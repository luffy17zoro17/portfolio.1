import { useForm, ValidationError } from '@formspree/react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MessageIcon from '@mui/icons-material/Message';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const ContactForm = ({state,handleSubmit}) => {
 return (
 <div>
  <form onSubmit={handleSubmit}>
  
  <div className='flex flex-col justify-center 
  relative items-center'>
    <h1 className='font-bold text-4xl top-[3rem] z-30 
    fixed shadow-md shadow-black bg-black
    flex justify-center text-white tracking-tight
     underline underline-offset-4'>CONTACT</h1>
     
  <div className='flex flex-col justify-center items-center space-y-2 
  mt-[4rem] md:mt-[0rem]
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
    );
}

export default ContactForm;