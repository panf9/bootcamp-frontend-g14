import { formatNumber } from "../../utils"
import { TbChevronRight } from "react-icons/tb"

const InvoicesList = ({ invoices }) => {
  return (
    <main className="w-[740px] m-auto flex flex-col gap-5" >
        {invoices.map(invoice => {
          return (
            <article 
              key={invoice.id}
              className="bg-slate-800 px-3 py-5 rounded-lg grid grid-cols-6 text-white text-xl items-center justify-items-center"
            >
              <div>
                <span className="text-slate-400">#</span>
                <span className="font-extrabold ">{invoice.code}</span>
              </div>
              <div>{invoice.invoice.date}</div>
              <div className="font-semibold text-">{invoice.bill.to.client.name}</div>
              <div className="text-3xl font-extrabold">
                {invoice.invoice.currency.symbol}
                {formatNumber(invoice.invoice.grandTotal)}
                </div>
              {/* <div>{invoice.invoice.grandTotal.toLocaleString('es-PE')}</div> */}
              <div>{invoice.status}</div>
              <div>
                <div className="py-3 bg-emerald-400/30 rounded-md text-center capitalize font-extrabold">
                  <span className="text-1xl ml-2 text-emerald-400/90">●</span>
                  {invoice.status}
                </div>
                <div className="justify-self-center">
                  <TbChevronRight />
                </div>
              </div>
            </article>
          )
        })}
      </main>
  )
}

export default InvoicesList