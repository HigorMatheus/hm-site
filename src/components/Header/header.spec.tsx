// import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
// import { describe, expect, it } from 'vitest';

import { Header } from '.';

describe('Header Component', () => {
  it('includes text', async () => {
    render(Header());

    // expect(getByText('Olá, Higor Matheus!')).toBeTruthy();
  });
});
