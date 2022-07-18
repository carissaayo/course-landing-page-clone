import './App.css';
import Header from "./components/Header/Header";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Subjects from './components/Subjects/Subjects';
import CTA from './components/CTA/CTA';
import Experts from './components/Experts/Experts';
import Outcome from './components/Outcome/Outcome';
import Footer from './components/Footer/Footer';

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
     <Footer/>
    </div>
  );
}

export default App;
