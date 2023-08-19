import { Link, useParams } from "react-router-dom"

import BaseTag from '../components/shared/BaseTag'
import BaseButton from "../components/shared/BaseButton"
import { useEffect, useState } from "react"
import { getInvoice } from "../services/invoices"
import { formatNumber } from "../utils"

const InvoiceDetailPage = () => {
  const { id } = useParams()
  const [invoice, setInvoice] = useState(null)

  const INVOICE_STATUS = {
    'paid': {
      background:'bg-emerald-400/20',
      textColor: 'text-emerald-400'
    },
    'pending': {
      background:'bg-orange-400/20',
      textColor:'text-orange-400'
    },
    'draft': {
      background:'bg-slate-400/20',
      textColor:'text-slate-400'
    }
  }

  useEffect(() => {
    getInvoice(id)
    .then(data => setInvoice(data))
  }, [])

  if (!invoice) return <h1>Not found invoice</h1>
  
  return (
    <>
      <nav className="w-[940px] mx-auto mt-20">
        <Link 
        to='/'
        className="text-white font-bold">
          Go Home
        </Link>
      </nav>

      {/* <div className="text-white">
        {JSON.stringify(invoice)}
      </div> */}

      <header className="w-[940px] mx-auto bg-[#1f213a] py-3 px-8 mt-10 rounded-lg flex justify-between">
        <div className="flex items-center text-white gap-3">
          <h3>Status</h3>
          <BaseTag
            label={invoice.status}
            background= {INVOICE_STATUS[invoice.status].background}
            textColor= {INVOICE_STATUS[invoice.status].textColor}
          >
          Pendig
          </BaseTag>
          </div>
        <div className="flex gap-3">
          <BaseButton
          background='bg-slate-400'
          textColor='text-white'
          >
            Edit
          </BaseButton>
          <BaseButton
          background='bg-red-400'
          textColor='text-white'
          >
            Delete
          </BaseButton>
          <BaseButton
          background='bg-indigo-400'
          textColor='text-white'
          >
            Mark as Paid
          </BaseButton>
        </div>
      </header>
      
      <section className="w-[940px] mx-auto bg-[#1f213a] mt-5  py-3 px-8 rounded-lg text-white">
        <header className="flex justify-between">
          <div className="text-3xl">
            <span className="text-slate-400">#</span>
            <span className="font-extrabold">{invoice.code}</span>
            <div className="text-xl mt-2">
              {invoice.invoice.project.description}
            </div>
          </div>
          <div className="text-base text-right">
            <div>{invoice.bill.from.streetAddress}</div>
            <div>{invoice.bill.from.city}</div>
            <div>{invoice.bill.from.postCode}</div>
            <div>{invoice.bill.from.country}</div>
          </div>
        </header>

        <section className="grid grid-cols-3">
          <div className="flex flex-col gap-10">
            <div>
              <div className="text-xl mt-1">Invoice Date</div>
              <div className="text-xl mt-1 font-extrabold">{invoice.invoice.paymentDue}</div>
            </div>
            <div>
              <div className="text-xl mt-1">Payment Date</div>
              <div className="text-xl mt-1 font-extrabold">{invoice.date}</div>
            </div>
          </div>

          <div>
            <div className="text-lg mt-1">Bill To</div>
            <div className="text-lg mt-1 font-extrabold">{invoice.bill.to.client.name}</div>
            <div className="text-base mt-1">{invoice.bill.to.client.name}</div>
            <div className="text-base mt-1">{invoice.bill.to.city}</div>
            <div className="text-base mt-1">{invoice.bill.to.postCode}</div>
            <div className="text-base mt-1">{invoice.bill.to.country}</div>
          </div>

          <div>
            <div className="text-lg mt-1">Send to</div>
            <div className="text-xl font-extrabold">corro@email.com</div>
          </div>
        </section>

        <table className="bg-[#252845] w-full rounded-lg mt-10">
          <thead>
            <tr>
              <th className="p-6 text-left">Item Name</th>
              <th className="p-6">QTY.</th>
              <th className="p-6">Price</th>
              <th className="p-6">Total</th>
            </tr>
          </thead>
          <tbody>
            {invoice.invoice.items.map( item => {
              return(
                <tr key={item.id}>
                  <td className="p-6 text-left w-1/2">{item.name}</td>
                  <td className="p-6 w-1/6">{item.qty}</td>
                  <td className="p-6 w-1/6">{formatNumber(item.price)}</td>
                  <td className="p-6 w-1/6">{formatNumber(item.total)}</td>
                </tr>
              )
            })}
          </tbody>
          <tfoot className="bg-[#0b0e16]">
            <tr>
              <td className="px-6 py-10">Amount Due</td>
              <td className="px-6 py-10"></td>
              <td className="px-6 py-10"></td>
              <td className="px-1 py-6 text-4xl font-extrabold">
                {invoice.invoice.currency.symbol}
                {formatNumber(invoice.invoice.grandTotal)}
              </td>
            </tr>
          </tfoot>
        </table>
      </section>
    </>
  )
}

export default InvoiceDetailPage