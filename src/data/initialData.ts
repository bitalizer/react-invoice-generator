import { ProductLine, Invoice } from './types';

export const initialProductLine: ProductLine = {
  description: '',
  quantity: '1',
  rate: '0.00',
};

export const initialInvoice: Invoice = {
  logo: '',
  logoWidth: 100,
  title: 'INVOICE',
  companyName: '',
  name: '',
  billTo: 'Bill To:',
  clientName: '',
  invoiceDateLabel: 'Invoice Date',
  invoiceDate: '',
  invoiceDueDateLabel: 'Due Date',
  invoiceDueDate: '',
  productLineDescription: 'Item Description',
  productLineQuantity: 'Hours',
  productLineQuantityRate: 'Rate',
  productLineQuantityAmount: 'Amount',
  productLines: [
    {
      description: 'Brochure Design',
      quantity: '1',
      rate: '17.00',
    },
    { ...initialProductLine },
    { ...initialProductLine },
  ],
  subTotalLabel: 'Sub Total',
  discountLabel: 'Discount (10%)',
  totalLabel: 'TOTAL',
  currency: 'EUR',
  notesLabel: 'Notes',
  notes: 'It was great doing business with you.',
  termLabel: 'Terms & Conditions',
  term: 'Please make the payment by the due date.',
};
