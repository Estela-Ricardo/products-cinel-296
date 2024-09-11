import React from 'react'
import { useState } from 'react'

// No clique, implementar a probabilidade de:

// em 1 em cada 30 cliques, estourar o número de cookies
// e de pepitas (ambos passam a zero)

// em 1 em cada 50 cliques, ganhar o estado "lucky"
// que passa a aumentar 2 cookies por clique
// (alterar o fundo de cor)

function CookieBox() {

    const estados = ['normal', 'lucky']

    const [estadoAtual, setEstadoAtual] = useState(estados[0])

    const [cookies, setCookies] = useState(0)
    const [nuggets, setNuggets] = useState(0)

    const handleClick = () => {

        if (Math.random() < 0.2) {
            setNuggets(nuggets + 1)
        }

        if (Math.random() < 0.033) {
            setCookies(0)
            setNuggets(0)
        }

        if (Math.random() < 0.02) {
            setEstadoAtual[estados[1]]
            console.log("Lucky estado!!!!!!!")
        }

        if(estadoAtual === estados[1]){
            setCookies(cookies + 2)
            console.log("Ïncrementar 2!!!!")
        }else{
            setCookies(cookies + 1)
            console.log("Ïncrementar 1")
        }

        console.log("Estado -> ", estadoAtual)
    }

    let backgroundColor = cookies >= 50 ? "#fcba03" : "gray"

    return (
        <button onClick={handleClick} style={{ backgroundColor }}>
            <div>Cookies: {cookies}</div>

            {nuggets > 0 && <div className='nuggets'>{nuggets} {nuggets === 1 ? "nugget" : "nuggets"}!</div>}
        </button>
    )
}

export default CookieBox