import { useState } from "react"

function App() {
  const [peso, setPeso] = useState(180)
  const [altura , setAltura] = useState(80)
  const [imc, setImc] = useState(20)

  const handleChangePeso = (event) => {
    // console.log(event.target.value);
    const value = event.target.value
    setPeso(value)

    return value
  }

  const handleChangeAltura = (event) => {
    const value = event.target.value

    setAltura(value)
    return value
  }

  const HandleChangeImc = (pes, alt) => {
    const value = (pes * 10000) / (alt * alt)
    console.log(pes)
    console.log(alt)
    console.log(value)
    setImc(value)
  }

  return (
    <>
      <section className="w-96 mx-auto my-5 rounded-lg bg-sky-500 p-4">
        <h1 className="text-3xl font-bold text-center text-white p-5">
          IMC APPs
        </h1>
        <div className="bg-sky-100 p-5" onChange={() => HandleChangeImc(peso, altura)}>
          <p className="font-bold">Peso: {peso}</p>

          <input 
            type="range" 
            className="w-full" 
            min="20"
            max="200"
            onChange={handleChangePeso} 
          />
          
          <p className="font-bold">Height: {altura}</p>
          
          <input 
            type="range" 
            className="w-full"
            min="30"
            max="250"
            onChange={handleChangeAltura} 
          />

          <p className="text-2xl font-bold bg-orange-400 text-center p-5 mt-5" >
            Tu IMC es {imc}
          </p>
        </div>
      </section>
    </>
  )
}

export default App
