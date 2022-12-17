
import './App.css';
import Fade from './components/hero/Fade';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Collections from './components/topCollection/Collections';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Hero/>
     <Fade />
     <Collections />
    </div>
  );
}

export default App;
