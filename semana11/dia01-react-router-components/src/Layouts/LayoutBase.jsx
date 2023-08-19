import { Link } from 'react-router-dom'

const LayoutBase = (props) => {
  return (
    <>
      <header className=' bg-amber-200 py-4 px-6'>
        <div className='container mx-auto flex justify-between'>
          <h1 className='text-bold'>React Router</h1>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </nav>
        </div>
      </header>
      
      <main>
        {props.children}
      </main>
    </>
  )
}

export default LayoutBase