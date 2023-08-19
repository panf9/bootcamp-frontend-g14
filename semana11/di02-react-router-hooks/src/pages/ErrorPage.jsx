import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <main className="bg-green-500 h-screen flex flex-col justify-center items-center">
      <h1 className="text-8xl text-white font-extrabold">Not Found</h1>
      <Link to="/" className="text-white p-4 hover:underline hover:text-gray-900 duration-300">Home</Link>
    </main>

  )
}

export default ErrorPage