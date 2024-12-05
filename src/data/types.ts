import { CSSProperties } from 'react'
import { z, TypeOf } from 'zod'

export interface ProductLine {
  description: string
  quantity: string
  rate: string
}

export const TProductLine = z.object({
  description: z.string(),
  quantity: z.string(),
  rate: z.string(),
})

export const TInvoice = z.object({
  title: z.string(),
  billCreator: z.string(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  billTo: z.string(),
  clientName: z.string(),
  clientAddress: z.string(),
  clientAddress2: z.string(),
  executionLabel: z.string(),
  executionStartDate: z.string(),
  executionFinishDate: z.string(),
  compilationDateLabel: z.string(),
  compilationDate: z.string(),
  bankAccountLabel: z.string(),
  bankAccount: z.string(),
  productLineDescription: z.string(),
  productLineQuantity: z.string(),
  productLineQuantityRate: z.string(),
  productLineQuantityAmount: z.string(),
  productLines: z.array(TProductLine),
  subTotalLabel: z.string(),
  totalLabel: z.string(),
  currency: z.string(),
  notesLabel: z.string(),
  notes: z.string(),
  termLabel: z.string(),
  term: z.string(),
})

export type Invoice = TypeOf<typeof TInvoice>

export interface CSSClasses {
  [key: string]: CSSProperties
}
