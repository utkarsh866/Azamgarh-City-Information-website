// import "./Contact.css";
// import Contact1 from './assets/Contact.gif'
// import emailjs from '@emailjs/browser';
// import { useRef } from 'react';
// export default function Contact() {
//   const form = useRef();
//   const sendEmail = (e) => {
//     e.preventDefault();
//       emailjs
//       .sendForm('service_t1qg5kb', 'template_i394apx', form.current, {
//         publicKey: 'ZykJYTEr-15OxCQOd',
//       })
//       .then(
//         () => {
//           console.log('SUCCESS!');
//           showAlert('Message Sent');
//           form.current.reset();
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//           showAlert('Message Sent');
//         },
//       );
//   };
//   const showAlert = (message) => {
//     alert(message);
   
//   };
//   return (
//     <div>
//       <div className="FlexDiv">
//        <img src={Contact1} alt="LEVEL" />
//       <form ref={form} onSubmit={sendEmail}>
//       <h1>CONTACT US</h1>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" className="submit-button"/>
//     </form>
//       </div>
//     </div>
//   )
// }
import "./Contact.css";
import Contact1 from './assets/Contact.gif'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    // Perform validation
    const formData = new FormData(form.current);
    const name = formData.get('user_name');
    const email = formData.get('user_email');
    const message = formData.get('message');
    
    if (!name || !email || !message) {
      showAlert('Please fill in all fields.');
      return;
    }

    emailjs
      .sendForm('service_t1qg5kb', 'template_i394apx', form.current, {
        publicKey: 'ZykJYTEr-15OxCQOd',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          showAlert('Message Sent');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          showAlert('Message Sent');
        },
      );
  };

  const showAlert = (message) => {
    alert(message);
  };
  
  return (
    <div>
      <div className="FlexDiv">
        <img src={Contact1} alt="LEVEL" />
        <form ref={form} onSubmit={sendEmail}>
          <h1>CONTACT US</h1>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" className="submit-button"/>
        </form>
      </div>
    </div>
  );
}
