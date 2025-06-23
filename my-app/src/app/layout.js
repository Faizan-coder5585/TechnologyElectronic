// app/layout.js
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'My Next.js App',
  description: 'Built with Next.js 14 and Tailwind CSS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans antialiased bg-white">
        <main>{children}</main>
      </body>
    </html>
  );
}
