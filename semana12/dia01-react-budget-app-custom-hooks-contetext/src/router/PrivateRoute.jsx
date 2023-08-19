import { useNavigate, Outlet } from "react-router-dom"
import useAuth from "../hooks/useAuth.js"
import { useEffect } from "react"

const PrivateRoute = () => {
  const { isAuth } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
  if(!isAuth){
    navigate('/login')
  }
  }, [isAuth])

  return (
    <Outlet />
  )
}

export default PrivateRoute