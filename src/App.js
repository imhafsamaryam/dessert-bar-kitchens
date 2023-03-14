import { useState } from 'react';
import './App.css';
import Footer from './components/footer';
import HeroSection from './components/heroSection';
import Navbar from './components/navbar';
import SecondSec from './components/secondSec';
import LoginPopUp from './components/loginPopup';
import './styles/globals.css'

function App() {
  const [loginPopup, setLoginPopUp] = useState(false)
  return (
    <div>
      <Navbar loginOpen={() => setLoginPopUp(true)} />
      {
        loginPopup &&
        <div className='flex flex-col items-center'>
          <LoginPopUp closePopup={() => setLoginPopUp(false)} />
        </div>
      }
      <HeroSection />
      <SecondSec />
      <Footer />
    </div>
  );
}

export default App;
