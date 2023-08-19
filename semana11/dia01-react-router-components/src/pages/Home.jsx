import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  useEffect(() => {
    console.log('Hola')
  }, [])
  return (
    <>
      <div>Home Page</div>
      <Link to='/login'>Login</Link>
    </>
  )
}

export default Home