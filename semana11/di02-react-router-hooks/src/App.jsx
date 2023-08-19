import { RouterProvider } from 'react-router-dom'
import { PrimaryRouter } from './routes/PrimaryRouter'

export default function App() {
  
  return (
    <>
      <main>
        <RouterProvider router={PrimaryRouter} />
      </main>
    </>
  )
}