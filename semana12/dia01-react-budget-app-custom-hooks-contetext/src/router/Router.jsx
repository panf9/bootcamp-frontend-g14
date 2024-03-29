import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LayoutBase from '../Layout/LayoutBase'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import PrivateRoute from './PrivateRoute'

import { UserProvider } from '../context/UserContex'

const Router = () => {
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <LayoutBase>
            <Routes>

              <Route element={<PrivateRoute />}>
                <Route path='/' element={<Home />} />
              </Route>


              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </Routes>
          </LayoutBase>
        </BrowserRouter>
      </UserProvider>
    </>
  )
}

export default Router
