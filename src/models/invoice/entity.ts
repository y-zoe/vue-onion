import { PartnerEntity } from '../partner/entity'
import type { InvoiceProps } from './definition'

export class InvoiceEntity implements InvoiceProps {
  readonly id!: number
  name!: string
  amount!: number
  partner!: PartnerEntity
  private source: InvoiceProps

  constructor(props: InvoiceProps) {
    this.id = props.id
    this.init(props)
    this.source = { ...props }
  }

  private init(props: InvoiceProps) {
    this.name = props.name
    this.amount = props.amount
    this.partner = new PartnerEntity(props.partner)
  }

  reset() {
    this.init(this.source)
  }

  get isEdited() {
    return (
      this.name !== this.source.name ||
      this.amount !== this.source.amount ||
      this.partner.name !== this.source.partner.name
    )
  }

  nameErrors() {
    if (this.name.length > 3) {
      return ['名前は3文字以内']
    } else {
      return []
    }
  }

  amountErrors() {
    if (this.amount < 300) {
      return ['amountは300以上']
    } else {
      return []
    }
  }

  get errorMessages() {
    return {
      name: this.nameErrors(),
      amount: this.amountErrors()
    }
  }

  get nameLength() {
    return this.name.length
  }

  nameLengthFunc() {
    return this.name.length
  }
}
