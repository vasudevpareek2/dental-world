import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import FloatingSocialIcons from './components/FloatingSocialIcons';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dental World - Your Trusted Dental Care Partner',
  description: 'Comprehensive dental care for all ages with gentle, expert professionals.',
  keywords: 'dental, dentist, dental world, teeth cleaning, cosmetic dentistry, teeth whitening',
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
