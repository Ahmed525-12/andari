// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Tajawal } from 'next/font/google';

// 1️⃣ — Static Metadata (global)
export const metadata: Metadata = {
  // Core
  title: {
    default: 'أندري للاستشارات | تخطيط استراتيجي وخبرات عميقة',
    template: '%s | أندري للاستشارات',
  },
  description:
    'شركة أندري متخصصة في بناء الاستراتيجيات، الحوكمة، وإدارة المخاطر للشركات والجهات الحكومية في المملكة العربية السعودية.',
  keywords: [
    'استشارات',
    'تخطيط استراتيجي',
    'حوكمة',
    'إدارة المخاطر',
    'أبحاث السوق',
    'أندري',
    'Andari Consultancy',
    'Andari',
  ],
  generator: 'Next.js 15',
  applicationName: 'Andari Consultancy',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  viewport:
    'width=device-width, initial-scale=1, viewport-fit=cover, maximum-scale=5',
  themeColor: '#094d92', // corporate blue

  // 2️⃣ — Canonical and alternates
  alternates: {
    canonical: 'https://andari.sa/',
    languages: {
      'ar-SA': 'https://andari.sa/',
      'en-US': 'https://andari.sa/en',
    },
  },

  // 3️⃣ — Open Graph (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    type: 'website',
    url: 'https://andari.sa/',
    title: 'أندري للاستشارات | خبراء التخطيط الاستراتيجي في السعودية',
    description:
      'أكثر من 50 مشروعًا ناجحًا في القطاعات الحكومية والخاصـة. اكتشف خدماتنا في بناء الاستراتيجيات ودعم العمليات.',
    siteName: 'Andari Consultancy',
    locale: 'ar_SA',
    images: [
      {
        url: 'https://andari.sa/og-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'شعار أندري للاستشارات مع عبارة التخطيط الاستراتيجي',
      },
      {
        url: 'https://andari.sa/og-cover-square.jpg',
        width: 1200,
        height: 1200,
        alt: 'شعار أندري للاستشارات نسخة مربعة',
      },
    ],
  },

  // 4️⃣ — Twitter Card
  twitter: {
    card: 'summary_large_image',
    site: '@Andari_SA',
    creator: '@Andari_SA',
    title: 'أندري للاستشارات | تخطيط استراتيجي وخبرات عميقة',
    description:
      'نربط رؤيتكم بالواقع عبر خطط تنفيذية محكمة وخدمات حوكمة ومخاطر متكاملة.',
    images: ['https://andari.sa/og-cover.jpg'],
  },

  // 5️⃣ — Icons
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-32.png',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'mask-icon',
      url: '/safari-pinned-tab.svg',
      color: '#094d92',
    },
  },

  // 6️⃣ — Structured Data via JSON-LD
  other: {
    'organization-schema': `
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://andari.sa/#organization",
      "name": "شركة أندري للاستشارات",
      "alternateName": "Andari Consultancy",
      "url": "https://andari.sa/",
      "logo": "https://andari.sa/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+966-56-065-6965",
        "contactType": "customer service",
        "areaServed": "SA",
        "availableLanguage": ["ar"]
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "الرياض",
        "addressCountry": "SA"
      },
      "sameAs": [
        "https://www.linkedin.com/company/andari-sa/",
        "https://x.com/Andari_SA"
      ],
      "foundingDate": "2023",
      "description": "استشارات متخصصة وخبرات عميقة في التخطيط الاستراتيجي، الحوكمة، وإدارة المخاطر."
    }`,
  },
};

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['400', '500', '700'],
  variable: '--font-tajawal',
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${tajawal.variable} bg-white text-gray-900 scroll-smooth`}>
        {children}
      </body>
    </html>
  );
}
