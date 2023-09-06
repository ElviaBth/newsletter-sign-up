import mobileImg from './assets/images/illustration-sign-up-mobile.svg'
import desktopImg from './assets/images/illustration-sign-up-desktop.svg'
import iconList from './assets/images/icon-list.svg'
import './App.css'
import { useState, useEffect, useRef } from 'react'
import { useNavigate} from 'react-router-dom'


function App() {
  const [emailError, setEmailError] = useState("");
  const buttonRef = useRef(null);
  const emailRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    buttonRef.current.disabled = true;
  }, [])
  

  const ValidateEmail= (e) =>{
     const emailFormat =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     let email = e.target.value;
     if (email.match(emailFormat)){
      setEmailError('')
      emailRef.current.className = '';
      buttonRef.current.disabled = false;
      buttonRef.current.className = 'newsletter-btn'
      
     }else {
      setEmailError("Valid email required")
      emailRef.current.className = 'email-input-error'
     }

  }

  const HandleSubmit = () => {
    if (!buttonRef.current.disable){
      navigate(`/subscribe?email=${emailRef.current.value}`)

    }
  }

  return (
      <div className='container'>
        <picture>
          <img media="(min-width:576px)" src={desktopImg} className='desktop-img' />
          <img src={mobileImg} alt="sign-up image" className='mobile-img'/>
        </picture>
        <section>
          <h1>Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul>
            <li><img src={iconList} alt='icon list' className='icon-list'/><p>Product discovery and building what matters</p></li>
            <li><img src={iconList} alt='icon list' className='icon-list' /><p>Measuring to ensure updates are a success</p></li>
            <li><img src={iconList} alt='icon list' className='icon-list' /><p>And much more!</p></li>
          </ul>
          <form action="#" name='newsletterForm'>
            <div className='caption-error-container'>
              <label htmlFor='email'> Email address</label>
              <span className='email-error'>{emailError}</span>
            </div>
            <input 
            type="email"  
            id='email'
            name='email'
            ref={emailRef}
            placeholder='email@company.com'
            onChange={(e)=>ValidateEmail(e)}
            />
            <button 
            id='newsletterBtn' 
            type="button" 
            ref={buttonRef}
            onClick={HandleSubmit}
            >
            Subscribe to monthly newsletter
            </button>
          </form>

        </section>
      </div> 
  )
}

export default App
