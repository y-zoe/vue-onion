import { computed, reactive, toRefs, ref, shallowRef } from 'vue'
import type { InvoiceProps } from './definition'

// ドメイン層（vue依存不可）
export const createInvoiceEntity = (props: InvoiceProps) => {
  const accessor = reactive({ ...props })

  const partner = {
    name: accessor.partner.name,
    nameLength: computed(() => accessor.partner.name.length)
  }

  const nameErrors = () => {
    if (accessor.name.length > 3) {
      return ['名前は3文字以内']
    } else {
      return []
    }
  }

  const amountErrors = () => {
    if (accessor.amount < 300) {
      return ['amountは300以上']
    } else {
      return []
    }
  }

  const getErrorMessages = computed(() => {
    return {
      name: nameErrors(),
      amount: amountErrors()
    }
  })

  const nameLength = computed(() => accessor.name.length)
  const nameLengthFunc = () => {
    return accessor.name.length
  }

  return {
    ...toRefs(accessor),
    nameLength,
    errorMessages: getErrorMessages,
    nameLengthFunc,
    nameErrors,
    amountErrors,
    partner: partner
  }
}
