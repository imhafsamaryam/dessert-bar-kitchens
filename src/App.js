import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/footer';
import HeroSection from './components/heroSection';
import Navbar from './components/navbar';
import SecondSec from './components/secondSec';
import LoginPopUp from './components/loginPopup';
import './styles/globals.css'
import { getProducts } from './utils/backendcalls';
import Dishes from './components/dishes';

function App() {
  const [loginPopup, setLoginPopUp] = useState(false)
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('accessToken') ? true : false)
  const [products, setProducts] = useState([])
  useEffect(() => {
    if (loggedIn) {
      getProducts().then((a) => {
        setProducts(a.data.results)
      })
    } else {
      setProducts([])
    }
  }, [loggedIn])
  return (
    <div>
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} loginOpen={() => setLoginPopUp(true)} />
      {
        loginPopup &&
        <div className='flex flex-col items-center'>
          <LoginPopUp closePopup={() => setLoginPopUp(false)} setLoggedIn={setLoggedIn} />
        </div>
      }
      <HeroSection />
      <SecondSec />
      <Dishes products={products} />
      <Footer />
    </div>
  );
}

export default App;
