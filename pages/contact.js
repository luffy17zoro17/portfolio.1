
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
      <form onSubmit={handleSubmit}>

      <label htmlFor='first'>First Name</label>  
      <input id="first" name="first" type="text" required/>

      <label htmlFor='last'>Last Name</label>
      <input id="last" name="last" type="text" required/>

      <label htmlFor="email">
        Email Address:&nbsp;
      </label>
      <input id="email" type="email" name="email" required/>

      <label htmlFor='number'>Phone Number(Optional):&nbsp;</label>
      <input id="number" type="tel" name="number"/>

    
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="message">Message:&nbsp;</label>
      <textarea
        id="message"
        name="message"
        required
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
function Contact() {
  return (
    <ContactForm />
  );
}
export default Contact;
