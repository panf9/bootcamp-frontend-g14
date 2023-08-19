const url = 'http://localhost:3000/invoices'

export const fectInvoices = async () => {
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data);

    return data
  }