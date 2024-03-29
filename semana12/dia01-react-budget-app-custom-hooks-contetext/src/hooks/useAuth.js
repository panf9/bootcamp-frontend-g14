import { useState } from "react"

const useAuth = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('auth')) || { email: '' }
  )

  const isAuth = Boolean(user?.email) // Si estas logueado

  // const setAuth = (user) => {
  //   setUser(user)
  //   localStorage.setItem('auth', JSON.stringify(user))
  // }

  const setAuth = (user) => {
    setUser(user)
    localStorage.setItem('auth', JSON.stringify(user))
  }

  const logout = () => {
    localStorage.removeItem('Auth')
  }

  return (
    user,
    isAuth,
    setAuth,
    logout
  )
}

export default useAuth