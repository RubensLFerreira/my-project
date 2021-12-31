import logo from './logo.svg';
import './App.css';

function App() {

  const nome = "Rubens"
  const newName = nome.toUpperCase()

  function sum(a, b){
    return a + b
  }
  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <h1>Olá {newName}</h1>
      <p>Meu primeiro APP</p>
      <p>soma : {sum(2, 6)}</p>
      <img src={url} alt="Minha imagem"/>
    </div>
  )
  /*
  const texto = 'frase incompleta'

  function exibirTexto(props){
    const textoInserido = props.texto
    const textoCapslook = textoInserido.toUpperCase()
    return <div>{textoCapslook}</div>
  }
  */
}

export default App;
