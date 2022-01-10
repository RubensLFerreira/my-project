function Form() {
  
  function cadastrarUsuario(e) {
    e.preventDefault() //Usado para nn envia diretamente o evento
    var id = document.getElementById("id").value;
    var idNovo = String(id)
    console.log(idNovo)
  }



  return (
    <>
      <h1>Formulário</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <input id="id" type="text" placeholder="Digite seu nome"></input>
        </div>
        <div>
          <input type="submit" value="Cadastrar Usuário"></input>
        </div>
      </form>
    </>
  )
}

export default Form