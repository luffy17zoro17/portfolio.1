import { useForm, ValidationError } from '@formspree/react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MessageIcon from '@mui/icons-material/Message';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const ContactForm = ({state,handleSubmit}) => {
 return (
 <div className='bg-black w-[100%] flex justify-center'> 
 <div className='shadow-lg mt-[12rem]
 shadow-pink-600 rounded-b-full flex border-t-[0.3rem]
  border-x-[1rem]
 flex-col justify-center items-center
 bg-gradient-to-b from-orange-500 to-blue-700 px-3
  md:px-[5rem] md:mt-[14rem] lg:mt-0'>
  <form onSubmit={handleSubmit}>
  <div className='pb-[8rem] py-11 space-y-4'>
  <div className='font-semibold space-y-3 flex flex-col justify-center 
  items-center md:space-y-0 md:flex-row 
  md:space-x-4 lg:space-x-10'>
    
    
  <div className='md:flex md:flex-col md:items-center md:justify-center'>
   
  <label className='z-20 text-white px-2 py-[0.3rem] 
  shadow shadow-blue-700 rounded-r-2xl'
   htmlFor='first'>First Name:</label>
  <input className="shadow-inner shadow-black
   flex p-1 pl-4 font-light italic z-20
   placeholder-green-500 text-sm
  outline-none border-2 border-purple-400 rounded-3xl
   lg:text-lg" 
  id="first" name="first" type="text" 
  placeholder='First name'
  autoComplete="off" required/>
  </div>

  <div className='md:flex md:flex-col md:items-center'>
  <label className='px-2 py-[0.3rem] text-white 
  shadow shadow-blue-700 rounded-r-2xl'
   htmlFor='last'>Last Name:</label>
  <input className="shadow-inner placeholder-green-500
   shadow-black flex p-1 pl-4 font-light italic text-sm
  outline-none border-2 border-purple-400 rounded-3xl lg:text-lg"
   id="last" name="last" type="text" 
   placeholder='Last name'
   autoComplete="off" required/>
  </div> 
  
  </div> 

  <div className='flex space-y-3 flex-col font-semibold'>
  <div className=''>
  <label className="p-2 text-white rounded-r-2xl 
  shadow shadow-blue-700" htmlFor="email">
    <MailOutlineIcon className='mb-[0.2rem]'/>&nbsp;Email Address:
  </label>
  <input className="flex outline-none shadow-inner
   shadow-black
  border-2 p-1 pl-4 font-light italic truncate
  border-purple-400 rounded-3xl placeholder-green-500 w-[100%]
  text-sm lg:text-lg"
  placeholder='Enter Your Email Address'
   id="email" type="email" name="email" 
  autoComplete="off" required/>
  </div>

  <div className=''>
  <label className="p-2 text-white rounded-r-2xl
  shadow shadow-blue-700" 
  htmlFor='number'><WhatsAppIcon/>&nbsp;
  Phone Number or WhatsApp<span className='text-green-200'>
    (Optional)</span>:</label>
  <input className='flex outline-none border-2 
  shadow-inner shadow-black truncate w-[100%] placeholder-green-500
  border-purple-400 rounded-3xl p-1 pl-4 font-light italic
  text-sm lg:text-lg'
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
  <div className=''>
  <label className='p-2 text-white rounded-r-2xl
   shadow shadow-blue-700' 
  htmlFor="message"><MessageIcon/>&nbsp;Message:</label>
  <textarea
    className='flex p-1 pl-4 font-light italic shadow-inner
     shadow-black
    outline-none border-2 border-purple-400 rounded-3xl
    placeholder-green-500 w-[100%] text-sm lg:text-lg'
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
  <div className='rounded-3xl mx-[3rem]
    py-[2%] text-center bg-gradient-to-r from-white to-gray-500
     text-orange-900 font-mono text-xl
   shadow-md shadow-pink-500 cursor-pointer z-10 
   hover:bg-gradient-to-r hover:from-orange-300 hover:to-yellow-900 hover:text-white 
   hover:shadow-cyan-400 
   active:shadow-inner active:shadow-black lg:text-2xl lg:mx-[11rem]'>
  <button className="z-10 px-[3rem] md:px-[3rem]" type="submit" disabled={state.submitting}>
    Submit
  </button>
  </div>
  </div>
  </div>
</form> 
</div>
</div> 
    );
}

export default ContactForm;