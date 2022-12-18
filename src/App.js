
import './App.css';
import Acution from './components/acution/Acution';
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
     <Acution />
    </div>
  );
}

export default App;
