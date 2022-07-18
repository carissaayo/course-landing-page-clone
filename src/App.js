import './App.css';
import Header from "./components/Header/Header";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Subjects from './components/Subjects/Subjects';
import CTA from './components/CTA/CTA';
import Experts from './components/Experts/Experts';
import Outcome from './components/Outcome/Outcome';

function App() {
  return (
    <div className="App">
     <Header/>
     <Services/>
     <About/>
     <Subjects/>
     <CTA/>
     <Experts/>
     <Outcome/>
    </div>
  );
}

export default App;
