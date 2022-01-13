//import logo from './logo.svg';
import './App.css';
import OutraLista from './components/OutraLista';

function App() {

  const meusItens = ['react', 'vue', 'angular']

  return (
    <div className="App">
      <h1>Rederização de lista</h1>
      <OutraLista itens={meusItens}/>
      <OutraLista itens={[]}/>
    </div>
  )
}

export default App;
