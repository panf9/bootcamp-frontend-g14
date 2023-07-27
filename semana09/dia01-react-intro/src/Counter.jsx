import { useState } from "react"

const Counter = ({ iniciador = 1 }) => {
    const [counter, setCounter] = useState(iniciador)

    return (
        <div>
            <button onClick= {() => setCounter(counter + 1)}> + </button>
            <div>{counter}</div>

            <div>{iniciador}</div>
            <button onClick={() => setCounter(counter - 1)}> - </button>
        </div>
    )
}

export default Counter

    