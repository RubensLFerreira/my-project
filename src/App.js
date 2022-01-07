//import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa'
import Frases from './components/Frases'

function App() {

  return (
    <div className="App">
      <HelloWorld />
      <Frases />
      <SayMyName name="rubens"/>
      <Pessoa foto="https://via.placeholder.com/150" nome="Rubao" idade="24" profissao="programador"/>
    </div>
  )
}

export default App;
