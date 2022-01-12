import Button from './evento/Button'

function Eventos() {
  function clicar1() {
    alert('Ativando o primeiro evento!')
  }

  function clicar2(){
    alert('Ativando o segundo evento!')
  }


  return (
    <div>
      <p>Clique no botão abaixo!</p>
      <Button event={clicar1} text="Primeiro evento"/>
      <Button event={clicar2} text="Segundo evento"/>

    </div>
  )
}

export default Eventos