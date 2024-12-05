import NavBar from '@/components/navbar/NavBar'
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://el29.vercel.app/'),
  title: 'El29 - Aceites para Motor y Accesorios de Autos',
  description:
    'En El29 ofrecemos una amplia gama de aceites de motor de alta calidad y accesorios para autos. Todo lo que necesitas para mantener y mejorar tu vehículo, en un solo lugar.',
  keywords:
    'El29, aceites para motor, accesorios para autos, mantenimiento vehicular, piezas de auto, cubreasientos, filtros de aire, limpiaparabrisas, repuestos de autos, mejora de vehículos, soluciones automotrices, autopartes, servicio al cliente, productos para autos, accesorios exteriores, accesorios interiores',
  author: 'El29',
  openGraph: {
    title: 'El29 - Aceites y Accesorios para Autos',
    description:
      'Descubre aceites de motor premium y accesorios de calidad para tu auto en El29. Tu aliado en el cuidado y personalización de vehículos.',
    images: 'https://el29.vercel.app/image.jpg',
    url: 'https://el29.vercel.app/',
    type: 'website',
    site_name: 'El29',
  },
  alternates: {
    canonical: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'El29 - Venta de Aceites y Accesorios para Autos',
    description:
      'El29 es tu destino para encontrar aceites de motor de alta calidad y accesorios que tu vehículo necesita. Productos confiables y servicio excepcional.',
    images: 'https://el29.vercel.app/image.jpg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body className={poppins.className}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
