/* eslint-disable no-undef */
import { Suspense } from 'react'
import NavBar from '../../components/navBar/NavBar'
import Footer from '@/components/footer/Footer'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
        <NavBar />
        <Suspense fallback={<p>Loading feed...</p>}>
        {children}
      </Suspense>
      <Footer />
    </section>
  )
}
