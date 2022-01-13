function OutraLista({itens}){
  return(
    <>
      <h3>Tecnologias que quero aprender</h3>
      {itens.length ? (
        itens.map((item, index) => (
          <p key={index}>{item}</p>
        ))) : (
          <p>Não há itens na lista</p>
        )
      }
    </>
  )
}

export default OutraLista