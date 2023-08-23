import mobileImg from './assets/images/illustration-sign-up-mobile.svg'
import desktopImg from './assets/images/illustration-sign-up-desktop.svg'
import iconList from './assets/images/icon-list.svg'
import './App.css'

function App() {
  return (
    <>
      <div>
        <picture>
          <img media="(min-width:992px)" src={desktopImg} className='desktop-img' />
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
          <form action="">
          <label htmlFor='email'> Email address</label>
          <input type="email" name="email" id="email" placeholder='email@company.com'/>
          <button type='submit'>Subscribe to monthly newsletter</button>
          </form>

        </section>
      </div>
      

    </>
  )
}

export default App
