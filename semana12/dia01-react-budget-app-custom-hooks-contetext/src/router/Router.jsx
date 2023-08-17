import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LayoutBase from '../Layout/LayoutBase'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <LayoutBase>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </LayoutBase>
      </BrowserRouter>
    </>
  )
}

export default Router