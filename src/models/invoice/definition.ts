export interface PartnerProps {
  name: string
}

export interface InvoiceProps {
  id: number
  amount: number
  name: string
  partner: PartnerProps
}
