import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import FloatingSocialIcons from './components/FloatingSocialIcons';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dental World Jaipur - Best Dental Solutions in Jaipur | Expert Dentist',
  description: 'Dental World Jaipur offers the best dental solutions in Jaipur. Expert dentist providing comprehensive dental care, cosmetic dentistry, and advanced treatments in Sodala, Jaipur.',
  keywords: 'dental world jaipur, best dental solutions in jaipur, dentist in jaipur, dental clinic jaipur, best dentist jaipur, dental care jaipur, jaipur dental services, cosmetic dentistry jaipur, root canal treatment jaipur, teeth whitening jaipur, dental implants jaipur',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        {children}
        <FloatingSocialIcons />
      </body>
    </html>
  );
}
