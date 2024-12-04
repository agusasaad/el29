import BankTranfer from '@/assets/icons/BankTranfer'
import CreditCard from '@/assets/icons/CreditCard'
import Money from '@/assets/icons/Money'

export const data = [
  {
    title: 'Tarjeta de crédito',
    offert: '3 cuotas sin interés',
    icon: <CreditCard color='var(--red)' />,
  },
  {
    title: 'Transferencia',
    offert: '15% descuento pagando con transferencia',
    icon: <BankTranfer color='var(--red)' />,
  },
  {
    title: 'Efectivo',
    offert: '20% descuento pagando en efectivo',
    icon: <Money color='var(--red)' />,
  },
]
