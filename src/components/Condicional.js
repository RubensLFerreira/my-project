import {useState} from 'react'

function Condicional() {

  const [email, setEmail] = useState() //O useState é para setar os valores
  const [userEmail, setUserEmail] = useState()

  function enviar(e) {
    e.preventDefault()
    setUserEmail(email)
    //console.log(userEmail)
  }

  function limparEmail(){
    setUserEmail('')
  }

  return (
    <div>
      <h2>Cadastre o seu em-ail</h2>
      <form>
        <input
          type="email"
          placeholder="Digite o seu email"
          onChange={(e) => setEmail(e.target.value)}//setemail para setar o email para setEmail e posteriormente p/ email
        />
        <button type="submit" onClick={enviar}>Enviar email</button>
        {userEmail && ( //Essa linha vai verificar se userEmail é true, se for ele vai mostrar o userEmail
          <div>
            <p>O email do usuário é : {userEmail}</p>
            <button onClick={limparEmail}>Limpar E-mail</button>
          </div>
        )}
      </form>
    </div>
  )
}

export default Condicional 