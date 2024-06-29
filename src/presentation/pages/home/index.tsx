'use client';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Home() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className=" grid gap-2">
        <Input />
        <Input />
        <Button>salvar</Button>
      </div>
    </div>
  );
}
