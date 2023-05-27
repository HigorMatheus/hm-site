'use client';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';

// import { makeServer } from '@/services/mirage';
import { queryClient } from '@/services/queryClient';
// if (process.env.NODE_ENV === 'development') {
// makeServer();
// }
export function ReactQueryWrapper({ children }: React.PropsWithChildren) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}
