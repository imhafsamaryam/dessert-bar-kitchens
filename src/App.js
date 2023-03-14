import './App.css';
import Footer from './components/footer';
import HeroSection from './components/heroSection';
import Navbar from './components/navbar';
import SecondSec from './components/secondSec';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SecondSec />
      <Footer />
    </div>
  );
}

export default App;
