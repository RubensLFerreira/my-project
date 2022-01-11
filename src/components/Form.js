import { useState } from "react";

function Form() {
  function cadastrarUsuario(e) {
    e.preventDefault(); //Usado para nn envia diretamente o evento
    console.log(`Usuário: ${name} foi cadastrado com a senha ${password}`);
  }
  // O nome do atributo que vou resgatar e o nome que vou alterar
  const { name, setName } = useState();
  const { password, setPassword } = useState();

  return (
    <div>
      <h1>Cadastrar usuário</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <label htmlFor="name">Nome: </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
            //A cada letra que eu digite ela vai mudar no State
            // Vamos usa essa function para setar o name
          />
        </div>

        <div>
          <label htmlFor="password">Senha: </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Digite a sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <input type="submit" value="Cadastrar Usuário"></input>
        </div>
      </form>
    </div>
  );
}

export default Form;
