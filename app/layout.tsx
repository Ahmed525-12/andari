import './globals.css'
import { ReactNode } from 'react'
import { Tajawal } from 'next/font/google';

export const metadata = {
  title: 'Andari Portfolio',
  description: 'استشارات متخصصة وخبرات عميقة',
}
const tajawal = Tajawal({
  subsets: ['arabic'],            // makes sure Arabic characters are included
  weight: ['400', '500', '700'],  // pick the weights you need
  variable: '--font-tajawal',     // CSS variable for easy use
});
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl" >
      <body className={`${tajawal.variable} bg-white text-gray-900 scroll-smooth`}>
   

     {children}
      </body>
    </html>
  )
}
