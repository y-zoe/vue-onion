import type { InvoiceEntity, InvoiceProps } from './definition'

// ドメイン層（vue依存不可）
export const createUserEntity = (props: InvoiceProps): InvoiceEntity => {
  const accessor = { ...props }

  // validatorクラスとして外出ししたほうがいい
  // 見通し良くなるし再利用できる
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

  const getErrorMessages = () => {
    return {
      name: nameErrors(),
      amount: amountErrors()
    }
  }

  // setter/getter の定義を省略したいのでaccessorをそのまま返す
  return Object.assign(accessor, {
    getErrorMessages
  })
}
