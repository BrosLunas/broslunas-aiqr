import Navbar from '@/components/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';
import PlausibleProvider from 'next-plausible';

const inter = Inter({ subsets: ['latin'] });

let title = 'Broslunas Qr';
let description = 'Genera tus Qr con IA en segundos';
let url = 'https://broslunas-aiqr.vercel.app';
let ogimage = 'https://broslunas-aiqr.vercel.app/og-image.png';
let sitename = 'broslunas-aiqr.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    images: [ogimage],
    title,
    description,
    url: url,
    siteName: sitename,
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: [ogimage],
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <PlausibleProvider domain="broslunas-aiqr.vercel.app" />
        <meta name="google-site-verification" content="F8T3k8s_HD_6-hPvCDj0ICK6mMhBetfIPgca2x33_JE" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
