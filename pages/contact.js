




const Contact = () => {

  return (
    <div>
     <h1>Contact Form</h1>
    <form action={`${process.env.EMAIL}`} 
    method="POST">

      <label htmlFor="first">First Name</label>
      <input type="text" placeholder="First Name"
       id="first" name="first" required />

      <label htmlFor="last">Last Name</label>
      <input type="text" placeholder="Last Name" 
      id="last" name="last" required />

      <label htmlFor="email">Email</label>
      <input type="email" placeholder="Email"
       id="email" name="email" required />
      
      <label htmlFor="message">Message</label>
      <textarea type="text" id="message" placeholder="Message"
       name="message" required/>

      <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default Contact


