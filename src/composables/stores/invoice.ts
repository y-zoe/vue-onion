import { ref } from 'vue'
import { InvoiceService } from '@/models/invoice/service'
import { InvoiceEntity } from '@/models/invoice/entity-class'

// ユースケース層
export const useInvoiceStore = () => {
  const service = InvoiceService()

  // factory style
  // const invoice = ref<InvoiceEntity>()
  // const fetchInvoice = async (id: number) => {
  //   // service
  //   await new Promise((resolve) => setTimeout(resolve, 1000))
  //   invoice.value = service.getInvoiceById(id)
  // }

  // class style
  const invoice = ref<InvoiceEntity>()
  const fetchInvoice = async (id: number) => {
    // service
    await new Promise((resolve) => setTimeout(resolve, 1000))
    invoice.value = service.getInvoiceClassById(id)
  }

  const invoices = ref<InvoiceEntity[]>()
  const fetchInvoices = async (id: number) => {
    // service
    await new Promise((resolve) => setTimeout(resolve, 1000))
    invoices.value = service.getInvoicesClass()
  }

  return {
    invoice,
    invoices,
    fetchInvoice,
    fetchInvoices
    // errors
  }
}
