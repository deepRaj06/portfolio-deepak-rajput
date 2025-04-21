import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {

    const form = useRef();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState('');

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleMessage = (e) => {
        setMessage(e.target.value)
    }

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_1tlaw0a', 'template_rqodk5m', form.current, {
            publicKey: 'z2XdHU427f75iRpoV',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              setName('');
              setEmail('');
              setMessage('');
                setSuccess('Message Sent Successfully!')
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

  return (
    <div>
      <p className='text-cyan'>{success}</p>
      <form action="" className="flex flex-col gap-4 text-white" ref={form} onSubmit={sendEmail}>
        <input
          name='from_name' // should be same as name in emailjs
          type="text"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
          value={name}
          onChange={handleName}
        />
        <input
          name='from_email'
          type="email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
          value={email}
          onChange={handleEmail}
        />
        <textarea
          name="message"
          id=""
          type="text"
          placeholder="Message"
          rows="9"
          cols="50"
          required
          className="rounded-lg bg-lightBrown p-2"
          value={message}
          onChange={handleMessage}
        ></textarea>
        <button
          type="submit"
          className="w-full rounded-lg border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
