import faro from '@/assets/images/destacados/faroles.jpg'
import faro_1 from '@/assets/images/destacados/faroles_1.jpg'
import guardaB from '@/assets/images/destacados/guardaB.jpg'
import guardaB_1 from '@/assets/images/destacados/guardaB_1.jpg'
import capsula from '@/assets/images/destacados/capsula.jpg'
import capsula_1 from '@/assets/images/destacados/capsula_1.jpg'
import capsula_2 from '@/assets/images/destacados/capsula_2.jpg'
import tanque from '@/assets/images/destacados/tanque.jpg'
import tanque_1 from '@/assets/images/destacados/tanque_1.jpg'
import foco from '@/assets/images/destacados/foco.jpg'
import foco_1 from '@/assets/images/destacados/foco_1.jpg'
import foco_2 from '@/assets/images/destacados/foco_2.jpg'
import aceite from '@/assets/images/destacados/aceite.jpg'
import aceite_1 from '@/assets/images/destacados/aceite_1.jpg'
import aceite_2 from '@/assets/images/destacados/aceite_2.jpg'

export const destacados = [
  {
    id: '1',
    category: 'Iluminación',
    name: 'Juego Faro Trasero Mercedes Benz 1215/1218/710 C/s Ventana',
    description: 'Juego Faro 1215 Con y Sin Ventana Trasero x 2 Unidades',
    price: 39.982,
    currency: 'ARS',
    image: faro,
    carrucel: [faro, faro_1],
    productHighlights: [
      '• Compatible con Mercedes Benz',
      '• Faro trasero x 2',
      '• Con y sin ventana',
    ],
  },
  {
    id: '2',
    category: 'Accesorios de Exterior',
    name: 'Guardabarro Trasero Universal Pantalla Grande 68 Cm Ancho',
    description:
      'Guardabarro Pantalla grande Trasero Universal Acoplado Ancho 68 Cm.',
    price: 36.416,
    currency: 'ARS',
    image: guardaB,
    carrucel: [guardaB, guardaB_1],
    productHighlights: [
      '• Pantalla grande 68 cm',
      '• Material resistente y duradero',
      '• Fácil instalación universal',
    ],
  },
  {
    id: '3',
    category: 'Accesorios de Exterior',
    name: 'Climatizador Resfri AR Serie 8 blanco línea pesada Universal',
    description: 'Climatizador de cabina para línea pesada',
    price: 442.411,
    currency: 'ARS',
    image: capsula,
    carrucel: [capsula, capsula_1, capsula_2],
    productHighlights: [
      '• Ideal para vehículos de línea pesada.',
      '• Operación eficiente a 12 V.',
      '• Climatizador línea pesada.',
    ],
  },
  {
    id: '4',
    category: 'Accesorios de Exterior',
    name: 'Deposito De Agua Compatible Iveco Tector Cursor Eurocargo',
    description:
      'Depósito de Agua de radiador Para IVECO Tector / Cursor / Eurocargo / cavalino Con tapa',
    price: 146.206,
    currency: 'ARS',
    image: tanque,
    carrucel: [tanque, tanque_1],
    productHighlights: [
      '• Compatible con Iveco Tector',
      '• Depósito de agua radiador',
      '• Con tapa incluida',
    ],
  },

  {
    id: '5',
    category: 'Iluminación',
    name: 'Lampara Osram Hb4 9006 Standard 12v 51w Made In Usa',
    description: 'Lamparas Hb4 Osram Standard 9006 12v 51w',
    price: 13.999,
    image: foco,
    carrucel: [foco, foco_1, foco_2],
    productHighlights: [
      '• Lámpara Osram HB4',
      '• 12V 51W Standard',
      '• Fabricada en USA',
    ],
  },

  {
    id: '6',
    category: 'Motor',
    name: 'Aceite Quartz 7000',
    description: '10W40  Semi-Sintetico 4LTS 7000W-40 10W40 4L 7000W-40',
    price: 13.999,
    image: aceite,
    carrucel: [aceite, aceite_1, aceite_2],
    productHighlights: [
      '• Aceite Quartz 7000',
      '• Semi-Sintético 10W40',
      '• 4L Formato',
    ],
  },
]
