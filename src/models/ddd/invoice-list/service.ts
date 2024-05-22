import type { InvoiceEntity, InvoiceProps } from './definition'
import { InvoceApi } from '@/client/invoice-api'

// ドメインサービス層（vue依存不可）
export const InvoiceService = () => {
  const _api = InvoceApi()

  const getInvoiceById = (id: number): InvoiceEntity => {
    return _api.getInvoiceById(id)
  }

  return {
    getInvoiceById
  }
}
