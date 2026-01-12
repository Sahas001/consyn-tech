import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './theme-provider';

const inter = Inter({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap'
});

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sora',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Consyn - Intelligent Technology Solutions',
  description: 'Transform your business with cutting-edge technology solutions designed for modern enterprises.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sora.variable}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
