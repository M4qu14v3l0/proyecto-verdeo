import Footer from './components/footer';
import Navigation from './components/navigation';
import './globals.css'

export const metadata = {
  title: 'Proyecto Verdeo',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
