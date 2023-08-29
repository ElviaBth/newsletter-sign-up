import React from 'react'
import iconSuccess from '../../assets/images/icon-success.svg'
import '../subscribeComfirmation/SubscribeConfirmation.css'
import { Link, useSearchParams } from 'react-router-dom'

function SubscribeConfirmation() {
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email');

  return (
    <div className='subscribe-container'>
        <section className='subscribe-section'>
            <img src={iconSuccess} alt="icon success" />
            <h2>Thanks for subscribing!</h2>
            <p>A confirmation email has been sent to <span className='paragraph-email-span'>{email}</span>. Please open it and click the button inside to confirm your subscription.</p>

        </section>
        <Link to='/newsletter-sign-up'><button className='subscribe-button'>Dismiss message</button></Link>
    </div>
  )
}

export default SubscribeConfirmation
