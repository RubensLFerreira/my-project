import Item from './Item'

function List() {
  return(
    <>
    <h1>Lista</h1>
      <ul>
        <Item />
        <Item marca='Mustang' ano_lancamento={1987}/>
        <Item marca='Mercedes' ano_lancamento={1966}/>
      </ul>
    </>
  )
}

export default List