import { ProductLine, Invoice } from './types'

export const initialProductLine: ProductLine = {
  description: '',
  quantity: '1',
  rate: '0.00',
}

export const initialInvoice: Invoice = {
  title: 'INVOICE',
  billCreator: 'Bill creator:',
  name: '',
  email: '',
  phone: '',
  billTo: 'Bill To:',
  clientName: '',
  clientAddress: '',
  clientAddress2: '',
  executionLabel: 'Execution period:',
  executionStartDate: '',
  executionFinishDate: '',
  compilationDateLabel: 'Date of compilation:',
  compilationDate: '',
  bankAccountLabel: 'Bank Account:',
  bankAccount: '',
  productLineDescription: 'Item Description',
  productLineQuantity: 'Qty',
  productLineQuantityRate: 'Rate',
  productLineQuantityAmount: 'Amount',
  productLines: [
    {
      description: 'Brochure Design',
      quantity: '2',
      rate: '100.00',
    },
    { ...initialProductLine },
    { ...initialProductLine },
  ],
  subTotalLabel: 'Sub Total',
  totalLabel: 'TOTAL',
  currency: 'EUR',
  notesLabel: 'Notes',
  notes: 'It was great doing business with you.',
  termLabel: 'Terms & Conditions',
  term: 'Please make the payment by the due date.',
}
