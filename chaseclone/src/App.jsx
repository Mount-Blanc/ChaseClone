
import './App.css'

function App() {

  return (
    <>
    <header>
      <section className='header-nav-content-row'>
      <section>
        <ul className='header-nav-categories-links'>
          <li><a href=''>Personal</a></li>
          <li><a href=''>Business</a></li>
          <li><a href=''>Commercial</a></li>

        </ul>
      </section>
      <section>
        <ul  className='header-nav-categories-links'>
          <li><a href=''>Schedule a meeting</a></li>
          <li><a href=''>Customer service</a></li>
          <li><a href=''>Espanol</a></li>
        </ul>
      </section>
      </section>
      <secton>
        <section>
          <nav>
            <ul className='header-nav-categories-links'>
              <li><a href=''>Checking & savings</a></li>
              <li><a href=''>Credit cards</a></li>
              <li><a href=''>Home loans</a></li>
              <li><a href=''>Auto</a></li>
              <li><a href=''>Investing y J.P. Morgan</a></li>
              <li><a href=''>Education & goals</a></li>

            </ul>
          </nav>
        </section>
      </secton>
    </header>
    <div className='hero'>
      <div>
        <div>
          <p>Enjoy $200</p>
        </div>
        <div>
          <p>New Chase checking customers</p>
        </div>
      </div>
    </div>
    <div className='main-wrapper'>
    <div>Carasoul wrapper
      <div>
        <section>
          <h2>Choose what's right for you</h2>
          <div>
            <ul  className='header-nav-categories-links'>
              <li><a href=''>Business</a></li>
              <li><a href=''>Credit cards</a></li>
              <li><a href=''>Checking</a></li>
              <li><a href=''>Savings</a></li>
              <li><a href=''> Home loans</a></li>


            </ul>
          </div>
        </section>
      </div>
    </div>
    <div className='secton-content'>
      <h2>Security and control at your fingertips</h2>
      <p>With the Chase Mobile app, you can manage your accounts anytime, anywhere. Lock your card, view recent transactions,set up payments and more</p>
      <button>View resources</button>
    </div>
    <div>
      <div>1</div>
      <div>2</div>
      <div>3</div>

    </div>
    <div className='secton-content'>
      Depositing 
      <h2>Depositing checks is a snap</h2>
      <div className='section-text'>
      <p>Chase QuickDeposit lets you easily deposit checks from virtually anywhere. Just open the Chase Mobile app, take a photo and access your money.</p></div>
    </div>
    <div className='secton-content'>
      Resource center 
      <h2>Expore the Business Resource Center</h2>
      <p>Find articles, videos and more to help you start, manage or grow your business.</p>
      <button>View resources</button>
    </div>
    <div  className='secton-content'>
      customer 
      <h2>New Chase Customers</h2>
      <p>Enjoy $100 when you open a chase Secure Banking account with qualifying activies.</p>
      <button>Open an account</button>
    </div>
    </div>
    <footer className='footer'>
      <div>
We're here to help you manage your money today and tomorrow
</div>
    </footer>
    </>
  )
}

export default App
