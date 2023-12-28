import { Navbar } from '@/components/navbar';
import { ThemeProvider } from '@/components/theme/provider';

import '@/app/globals.css';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import { Toaster } from 'sonner';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: 'Johnc0de',
  description: 'Default Template'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn('flex min-h-screen flex-col bg-background font-sans antialiased', fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="container flex flex-1 flex-col ">{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
