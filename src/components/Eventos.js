function Eventos() {
  function clicar() {
    alert('Você clicou!')
  }

  return (
    <div>
      <p>Clique no botão abaixo!</p>
      <button onClick={clicar}>Clique</button>
    </div>
  )
}

export default Eventos