function SeuNome({setNome}) {
  return(
    <div>
      <h2>Digite seu nome</h2>
      <input
        type="text"
        placeholder="Digite"
        onChange={(e) => setNome(e.target.value)}
      />

    </div>
  )
}

export default SeuNome