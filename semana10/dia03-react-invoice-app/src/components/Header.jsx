// import { IconSquareRoundedPlusFilled } from "./Icons"
import { TbSquareRoundedPlusFilled } from "react-icons/tb"; // Usando la librería instalada

const Header = () => {
  return (
    <header className="flex justify-between w-[740px] m-auto items-center bg-slate-900 my-20">
        <div className="text-white">
          <h1 className="text-4xl font-extrabold">Invoices</h1>
          <span>There are 7 total invoices</span>
        </div>

        <button className="bg-indigo-400 rounded-full text-white px-5 py-3 font-extrabold flex justify-between items-center gap-4">
          {/* <IconSquareRoundedPlusFilled /> */}
          <TbSquareRoundedPlusFilled size="2rem"/>
          New Innvoice
        </button>
    </header>
  )
}

export default Header