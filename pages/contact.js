
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';


function ContactForm() {
  const [state, handleSubmit] = useForm('mrgdlwkj');
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
   <div className='border-4 border-black relative h-screen'>
        <h1 className='font-bold text-5xl flex justify-center'>CONTACT</h1>
    <form onSubmit={handleSubmit}>

      <div className='flex flex-col justify-center items-center h-[95%]
       border-2 absolute w-[100%]'>
      <div className='flex flex-col justify-center space-y-[5rem]
       border-2 border-blue-300 h-[80%] w-[40%]'>

      <div className='border flex justify-between'>
       <div>
      <label htmlFor='first'>First Name:&nbsp;</label> 
      <input className="flex 
      outline-none border-2 border-purple-400 rounded-xl" id="first" name="first" type="text" 
      autoComplete="off" required/>
      </div>
      <div>
      <label htmlFor='last'>Last Name:&nbsp;</label>
      <input className="flex outline-none border-2 border-purple-400 rounded-xl"
       id="last" name="last" type="text" 
       autoComplete="off" required/>
      </div> 
      </div> 

      <div className='flex flex-col space-y-[5rem] 
      border'>
      <div>
      <label htmlFor="email">
        Email Address:&nbsp;
      </label>
      <input className="flex outline-none border-2 border-purple-400 rounded-xl"
       id="email" type="email" name="email" 
      autoComplete="off" required/>
      </div>

      <div>
      <label htmlFor='number'>Phone Number(Optional):&nbsp;</label>
      <input className='flex outline-none border-2 border-purple-400 rounded-xl'
       id="number" type="number" name="number"
      pattern="[0-9]{1,15}"
      autoComplete='off'/>
      </div>

    
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <div>
      <label htmlFor="message">Message:&nbsp;</label>
      <textarea
        className='flex outline-none border-2 border-purple-400 rounded-xl'
        id="message"
        name="message"
        autoComplete='off'
        required
      />
      </div>
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <div className='border text-center'>
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
      </div>
      </div>
      </div>
      </div>
    </form>
   </div> 
  );
}
function Contact() {
  return (
    <ContactForm />
  );
}
export default Contact;
