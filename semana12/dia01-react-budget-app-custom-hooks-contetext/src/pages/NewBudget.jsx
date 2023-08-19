import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UserContex"
import { getUser } from "../services/budget"

const NewBudget = () => {
  const { user }  = useContext(UserContext)
  
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  // const getUser = async () => {
  //   const userId = form.id

  //   // const url = `https://64dd6d75825d19d9bfb12825.mockapi.io/api/v1/users/${userId}`
  //   // const response = await fetch(url)
  //   // const data = await response.json()
  //   // console.log(data);

  //   setForm({ budget: data.budget })
  // }
  
  const navigate = useNavigate()
  // const { setAut } = useAuth()
  useEffect(() => {
    getUser(user.id)
      .the()
  }, [])

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

    const budget = form.budget
    const userId = form.id

    const url = `https://64dd6d75825d19d9bfb12825.mockapi.io/api/v1/users/${userId}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data);

    setForm({email: '',password: ''})

    if (data.length === 1){
      const cloneData = { ...data[0] }
      delete cloneData.password // Borramos el password del objeto


      // localStorage.setItem('auth', JSON.stringify(cloneData))
      // setAut(cloneData)
      storeUser(cloneData)
      
      navigate('/')

    }else{
      alert("credenciales incorrectas!")
    }
  }
  
  return (
    <form className="w-96 mx-auto" onSubmit={handleSubmit}>
      <h1 className="text-center text-3xl mb-8">Budget App - New Budget</h1>
      {JSON.stringify(form)}
      <div className="flex flex-col gap-4 bg-slate-200 p-8 shadow-lg">
        <label className=" flex flex-col font-medium">
          Budget
          <input 
            type="number" 
            name="budget"
            placeholder="5000" 
            className="border f-full p-3" 
            required
            onChange={handleChange}
            value={form?.budget}
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

export default NewBudget