//import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa'

function App() {

  return (
    <div className="App">
      <HelloWorld />
      <SayMyName name="rubens"/>
      <Pessoa foto="https://via.placeholder.com/150" nome="Rubao" idade="23" profissao="programador"/>
    </div>
  )
}

export default App;
