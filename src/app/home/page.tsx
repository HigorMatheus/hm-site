import React, { Suspense } from 'react';

import { Container } from './Container';

export default async function home() {
  return (
    <Suspense>
      <Container></Container>
    </Suspense>
  );
}
