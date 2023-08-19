import { Link } from "react-router-dom"

const NewInvoicePage = () => {
  return (
    <>
      <nav className="w-[940px] mx-auto mt-20">
        <Link 
        to='/'
        className="text-white font-bold">
          Go Home
        </Link>
      </nav>

      <header className="w-[940px] mx-auto bg-[#1f213a] py-3 px-8 mt-10 rounded-lg flex justify-between">
        <div className="flex items-center text-white gap-3">
          <h3 className="text-3xl font-extrabold">New Invoice</h3>
        </div>
      </header>

      <form action="">
        <h4>Bill Form</h4>

        <label>
          Street Adrees
          <input type="text" />
        </label>
        <div>
          <label>
            City 
            <input type="text" name="" id=""/>
          </label>
          <label>
            Post Code 
            <input type="text" name="" id=""/>
          </label>
          <label>
            Country
            <select name="" id="">
              <option value="">Peru</option>
              <option value="">United Kindom</option>
            </select>
          </label>
        </div>
        
        <div>
          <label>
            Invoice Date
            <input type="date" name="" id=""/>
          </label>
          <label>
            Payment Terms 
            <select name="" id="">
              <option value="">Next 15 days</option>
              <option value="">Next 30 days</option>
              <option value="">Next 45 days</option>
            </select>
          </label>
          <label>
            City 
            <input type="text" name="" id=""/>
          </label>
        </div>
      </form>
    </>
  )
}

export default NewInvoicePage