import { useState } from "react"
import { useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const Login = () => {
    const [form, setForm] = useState({
      email: '',
      password: '',
    })
  
    const navigate = useNavigate()
    const { setAut } = useAuth()

    const handleChange = (event) => {
      const value = event.target.value 
      const name = event.target.name
  
      setForm({ 
        ...form, 
        [name]:value
      })
    }
  
    const handleSubmit = async (event) => {
      event.preventDefault()

      const email = form.email
      const password = form.password
  
      const url = `https://64dd6d75825d19d9bfb12825.mockapi.io/api/v1/users?email=${email}&password=${password}`
  
      // const options = {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(form)
      // }
  
      const response = await fetch(url)
      const data = await response.json()
      console.log(data);
  
      setForm({email: '',password: ''})
      
      if (data.length === 1){
        const cloneData = { ...data[0] }
        delete cloneData.password // Borramos el password del objeto


        // localStorage.setItem('auth', JSON.stringify(cloneData))
        setAut(cloneData)
        
        navigate('/')

      }else{
        alert("credenciales incorrectas!")
      }
    }
  
    return (
      <form className="w-96 mx-auto" onSubmit={handleSubmit}>
        <h1 className="text-center text-3xl mb-8">Budget App - Register</h1>
        {JSON.stringify(form)}
        <div className="flex flex-col gap-4 bg-slate-200 p-8 shadow-lg">
          <label className=" flex flex-col font-medium">
            Email
            <input 
              type="email" 
              name="email"
              placeholder="correo@email.com" 
              className="border f-full p-3" 
              required
              onChange={handleChange}
              value={form?.email}
            />
          </label>
          <label className="flex flex-col font-medium">
            Password 
            <input 
              type="password" 
              name="password"
              placeholder="*******" 
              className="border w-full p-3" 
              required
              onChange={handleChange}
              value={form?.password}
            />
          </label>
          <input 
            type="submit" 
            value="Register" 
            className="w-full bg-amber-400 p-3 font-medium"
          />
        </div>
      </form>
  )
}

export default Login