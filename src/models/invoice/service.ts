import { InvoceApi } from '@/api-client/invoice-api'
import { InvoiceEntity } from './entity'

// ドメインサービス層（vue依存不可）
export const InvoiceService = (api = InvoceApi()) => {
  const getInvoiceById = (id: number) => {
    return api.getInvoiceById(id)
  }

  const getInvoiceClassById = (id: number): InvoiceEntity => {
    const props = api.getInvoiceClassById(id)
    return new InvoiceEntity(props)
  }

  const getInvoicesClass = (): InvoiceEntity[] => {
    return api.getInvoicesClass().map((props) => new InvoiceEntity(props))
  }

  return {
    getInvoiceById,
    getInvoiceClassById,
    getInvoicesClass
  }
}
