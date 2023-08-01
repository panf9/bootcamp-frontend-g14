import { useState } from "react"
import './App.css'



const App = () => {
  const [bgcolor, setBgcolor] = useState('')

  const handleChange = (event) => {
    const text = event.target.value 
    console.log(text);
    setBgcolor(text)
    
  }


/*   const character = {
    background: bgcolor,
  } */

  return (
    <div style={{background: bgcolor}} >
      <span>selecciona un color:</span>
      <input type="text" 
        placeholder="#FF00065"
        onChange={ handleChange }
      />
    </div>
  )
}

export default App