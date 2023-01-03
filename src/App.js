
import './App.css';
import AboutUs from './components/aboutUs/AboutUs';
import Acution from './components/acution/Acution';
import Creator from './components/Creator/Creator';
import Fade from './components/hero/Fade';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Collections from './components/topCollection/Collections';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Fade/>
      <Collections/>
      <Acution/>
      <Creator/>
      <AboutUs/>
    </div>
  );
}

export default App;
