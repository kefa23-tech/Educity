import React from 'react'
import'./contact.css'
import msg_icon from'../../assets/msg-icon.png';
import mail_icon from'../../assets/mail-icon.png';
import phone_icon from'../../assets/phone-icon.png';
import location_icon from'../../assets/location-icon.png';
import white_arrow from'../../assets/white-arrow.png';



const Contact = () => {
     const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "bc9f2eb3-1d90-4f69-90f7-844eaaf148e6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact' >
        <div className='contact-col'>
            <h3>Send us a message 
               <img src={msg_icon} alt=''/>
            </h3>
              <p>
                Our cuttin-edge curriculum is designed to empower 
                students with the knowledge, skills, and experiences 
                needed to excel in the dynamic field of education
              </p>
              <ul>
                <li>
                    <img src={mail_icon}/>
                    email@gmail.com   
                </li>
                <li><img src={phone_icon}/>
                    +1 233-456-7890
                </li>
                <li> <img src={location_icon}/>
                    Adiss Ababa Wollo sefer                 
                </li>
              </ul>

        </div>
        <div className='contact-col'>
            <form onSubmit={onSubmit}>
                <label>
                    Your name
                </label>
                <input type='text' name='name' 
                 placeholder='Enter your name' required />
                 <label>
                    Phone number
                </label>
                <input type='tel' name='phone' 
                 placeholder='Enter your phone number' required />
                  <label>
                    Write your message here
                </label>
                <textarea  name='message'  rows='6'
                 placeholder='Write here' required />
                 < button className='btn dark-btn ' type='submit'>
                    Submit now
                    <img src={white_arrow}/>
                 </button>
            </form>
            <span>{result}</span>
        </div>

    </div>
  )
}

export default Contact