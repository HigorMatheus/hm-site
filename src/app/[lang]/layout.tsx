import { Roboto } from 'next/font/google';
import React from 'react';

import { Header } from '@/components/header';

// import { Header } from '@/components/';
// import { PageProps } from '@/data/page';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="h-screen bg-zinc-100">
      <Header />

      {children}
    </main>
  );
}
