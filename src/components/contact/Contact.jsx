import React, { useRef } from 'react'
import toast from 'react-hot-toast'
import MessageToaster from './Toaster'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [result, setResult] = React.useState("")
  const [toastType, setToastType] = React.useState("")

  const sendEmail = (e) => {
    e.preventDefault();
    const template_id = 'template_5g5tvxg';
    const public_key = 'ncW3VeDKZPL_X16PP';
    const service_id = 'service_g3ttr2k';

    // Show sending toast and keep its id
    const sendingToastId = toast.loading("Sending...");

    emailjs.sendForm(service_id, template_id, form.current, public_key)
      .then(() => {
        toast.dismiss(sendingToastId); // Remove sending toast
        setResult("");
        setToastType("success");
        toast.success("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        toast.dismiss(sendingToastId); // Remove sending toast
        setResult("");
        setToastType("error");
        toast.error("Something went wrong. Please try again.");
        console.error(error);
      });
  };

  return (
    <section id='contact' className='py-3 pb-5 '>
      <MessageToaster message={result} type={toastType} />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
          CONTACT
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6"></div>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      <div className='bg-white/10 backdrop-blur-xl rounded-xl p-8 '>
        {/* Contact Form */}
        <form ref={form} className="max-w-xl mx-auto bg-slate-400 rounded-xl shadow-lg p-8 flex flex-col gap-6 bg-gradient-to-br from-slate-300 via-gray-600 to-white" onSubmit={sendEmail}>

          <h3 className='text-xl text-black text-center'>Connect With Me 🚀</h3>

          {/* name section  */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-semibold text-black">Your Name</label>
            <input type="text" className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-slate-600" placeholder="Enter your full name" name='name' required />
          </div>

          {/* email section  */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-semibold text-black">Your Email</label>
            <input type="email" className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-slate-600" placeholder="Enter your email" name='email' required />
          </div>

          {/* subject section  */}
          <div className="flex flex-col gap-2">
            <label htmlFor="subject" className="font-semibold text-black">Subject</label>
            <input type="text" id="subject" className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-slate-600" placeholder="Subject" name='subject' required />
          </div>

          {/* message section  */}
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="font-semibold text-black">Message</label>
            <textarea name="message" rows={5} className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600 resize-none placeholder-slate-700" placeholder="Type your message..." required></textarea>
          </div>

          {/* button  */}
          <button type="submit" value="Send" className="bg-[#e65f5c] text-white font-bold py-2 rounded-md hover:bg-[#c94c4a] transition-colors duration-200">Send</button>
          {result && <p className="mt-4 text-center text-base text-green-600">{result}</p>}
        </form>
      </div>
    </section>
  )
}

export default Contact;