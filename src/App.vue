<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useInvoiceStore } from './composables/stores/invoice'

export default defineComponent({
  setup() {
    const { invoice, fetchInvoice, invoices, fetchInvoices } = useInvoiceStore()

    onMounted(() => {
      fetchInvoice(1)
      fetchInvoices(2)
    })

    return { invoice, invoices }
  }
})
</script>

<template>
  <div class="wrapper">
    <div class="container" v-if="invoice">
      <h2>single model</h2>
      <div class="textarea">
        <textarea>{{ invoice }}</textarea>
      </div>
      <button @click="invoice.reset()">Reset</button>
      <h3>root class</h3>
      <p>isEdited: {{ invoice.isEdited }}</p>
      <div class="input-container">
        <span>name:</span>
        <div>
          <span><input v-model="invoice.name" /></span>
          <p>nameLength: {{ invoice?.nameLength }}</p>
          <p>nameLengthFunc: {{ invoice?.nameLengthFunc() }}</p>
          <p>{{ invoice?.errorMessages.name }}</p>
        </div>
      </div>
      <div class="input-container">
        <span>amount:</span>
        <div>
          <span><input v-model="invoice.amount" /></span>
          <p>{{ invoice?.errorMessages.amount }}</p>
        </div>
      </div>
      <h3>nested partner class</h3>
      <div class="input-container">
        <span>partner name:</span>
        <div>
          <span><input v-model="invoice.partner.name" /></span>
          <p>nameLength: {{ invoice.partner.nameLength }}</p>
        </div>
      </div>
    </div>
    <div class="container" v-if="invoices">
      <h2>list model</h2>
      <div class="textarea">
        <textarea>{{ invoices }}</textarea>
      </div>
      <div class="child" v-for="invoice in invoices" :key="invoice.id">
        <button @click="invoice.reset()">Reset</button>
        <h3>root class</h3>
        <p>isEdited: {{ invoice.isEdited }}</p>
        <div class="input-container">
          <span>name:</span>
          <div>
            <span><input v-model="invoice.name" /></span>
            <p>nameLength: {{ invoice?.nameLength }}</p>
            <p>nameLengthFunc: {{ invoice?.nameLengthFunc() }}</p>
            <p>{{ invoice?.errorMessages.name }}</p>
          </div>
        </div>
        <div class="input-container">
          <span>amount:</span>
          <div>
            <span><input v-model="invoice.amount" /></span>
            <p>{{ invoice?.errorMessages.amount }}</p>
          </div>
        </div>
        <h3>nested partner class</h3>
        <div class="input-container">
          <span>partner name:</span>
          <div>
            <span><input v-model="invoice.partner.name" /></span>
            <p>nameLength: {{ invoice.partner.nameLength }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.wrapper {
  display: flex;
  justify-content: space-around;
  margin: 50px auto;

  .container {
    border: 1px solid #ccc;
    width: 30vw;
    padding: 0 30px;
  }
}

.textarea {
  textarea {
    width: 100%;
    height: 200px;
  }
}

.input-container {
  display: flex;
  justify-content: left;
  gap: 30px;
}

.child {
  padding: 30px;
  border: 1px solid red;
}
</style>
