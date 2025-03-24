import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Sidebar from '@/components/layout/Sidebar';
import '../styles/globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'AI Investment Agent',
  description: 'Advanced AI-powered investment management platform',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#F3F4F6',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <div className="flex min-h-screen bg-background">
          <Sidebar />
          <main className="flex-1 p-container animate-fade-in">
            <div className="max-w-7xl mx-auto">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
} 