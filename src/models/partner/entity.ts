import type { PartnerProps } from './definition'

export class PartnerEntity implements PartnerProps {
  name: string

  constructor(props: PartnerProps) {
    this.name = props.name
  }

  get nameLength() {
    return this.name?.length || 0
  }

  nameLengthFunc() {
    return this.name.length
  }
}
