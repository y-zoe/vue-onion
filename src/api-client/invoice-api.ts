import { createInvoiceEntity } from '@/models/ddd/invoice/entity'
import { type InvoiceProps } from '@/models/ddd/invoice/definition'

// インフラ層（vue依存不可）
export const InvoceApi = () => {
  const getInvoiceById = (id: number) => {
    return createInvoiceEntity({
      id: id,
      amount: 299,
      name: 'fetched name',
      partner: {
        name: 'partner name'
      }
    })
  }

  const getInvoiceClassById = (id: number): InvoiceProps => {
    return {
      id: id,
      amount: 299,
      name: 'fetched name',
      partner: {
        name: 'partner name'
      }
    }
  }

  const getInvoicesClass = (): InvoiceProps[] => {
    return [
      {
        id: 1,
        amount: 111,
        name: 'fetched name1',
        partner: {
          name: 'partner name1'
        }
      },
      {
        id: 2,
        amount: 222,
        name: 'fetched name2',
        partner: {
          name: 'partner nam2'
        }
      },
      {
        id: 3,
        amount: 333,
        name: 'fetched name3',
        partner: {
          name: 'partner name3'
        }
      }
    ]
  }

  return {
    getInvoiceById,
    getInvoiceClassById,
    getInvoicesClass
  }
}
