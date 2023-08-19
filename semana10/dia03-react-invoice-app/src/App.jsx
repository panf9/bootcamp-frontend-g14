import { useEffect, useState } from "react"
import { fectInvoices } from "./services/invoices"
import Header from "./components/Header"
import InvoicesList from "./components/invoices/InvoicesList"



function App() {
  // const url = 'http://localhost:3000/invoices'

  const [invoices, setInvoices] = useState([])

  useEffect( ()=> {
    // fectInvoices().then(setInvoices)  // Forma rápida
    fectInvoices().then(data => setInvoices(data))
  }, [])

  return (
    <>
      <Header />

      <InvoicesList invoices={invoices} />
        
    </>
  )
}

export default App
