import "./contact.css";
import Phone from "../../img/iconos/whatsapp.png";
import Email from "../../img/iconos/gmail.png";
import Address from "../../img/iconos/map.png";
import { useRef, useState , useContext } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done,setDone] = useState(false)
  
const theme = useContext(ThemeContext)
const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_7rqp3os",
        "template_e5bdgmu",
        formRef.current,
        "b9VxdHuHvzdR77CAP"
      )
      .then(
        (result) => {
          ;
          setDone(true)
        },
        (error) => {
          ;
        }
      );
  };

  return (
    <div className="c" id="contact">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone } alt="" className="c-icon" />
              +543812508502
            </div>

            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              matiiiastorres@gmail.com
            </div>

            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              Tucuman - Argentina
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's your story </b>Get in touch. Always freelancing if the
            right projects comes along.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message"></textarea>
            <button className="custom-btn"><span>enviar</span></button>
            <div className="mensaje">
              
              {done && "Thank you..."}
              </div>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
