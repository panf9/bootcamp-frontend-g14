import { createBrowserRouter } from "react-router-dom"
import PrimaryLayout from "../layouts/PrimaryLayout"
import ErrorPage from "../pages/ErrorPage"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import PokemonDetail from "../pages/PokemonDetail"


export const PrimaryRouter = createBrowserRouter([
    {
      path: '/',
      element: <PrimaryLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/register',
          element: <Register />
        },
        {
          path: '/pokemon/:id',
          element: <PokemonDetail />
        }
      ]
    },
    
  ])