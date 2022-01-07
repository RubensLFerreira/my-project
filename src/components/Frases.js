import styles from './Frases.module.css'

function Frases() {
    return (
        <div className={styles.frasesConteiner}> 
            <p className={styles.frasesContent}>Esté é um componente com uma frase</p>
        </div>
    )
}

export default Frases