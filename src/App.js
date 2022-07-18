import './App.css';
import Header from "./components/Header/Header";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Subjects from './components/Subjects/Subjects';

function App() {
  return (
    <div className="App">
     <Header/>
     <Services/>
     <About/>
     <Subjects/>
    </div>
  );
}

export default App;
