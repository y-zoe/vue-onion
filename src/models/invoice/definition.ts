import type { PartnerProps } from '../partner/definition'

export interface InvoiceProps {
  id: number
  amount: number
  name: string
  partner: PartnerProps
}
