export interface InvoiceProps {
  id: number
  amount: number
  name: string
}

export interface InvoiceEntity extends InvoiceProps {
  getErrorMessages: () => {
    name: string[]
    amount: string[]
  }
}
