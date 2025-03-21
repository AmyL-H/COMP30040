// /tests/Footer.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';
import { MemoryRouter } from 'react-router-dom';

describe('Footer', () => {
  test('renders CyberIQ in footer logo', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    expect(screen.getByText(/cyberiq/i)).toBeInTheDocument();
  });

  test('renders Subscribe button', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument();
  });
});
