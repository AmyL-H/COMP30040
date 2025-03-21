// /tests/Navbar.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar';
import { MemoryRouter } from 'react-router-dom';

describe('Navbar', () => {
  test('renders CyberIQ brand', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    expect(screen.getByText(/cyberiq/i)).toBeInTheDocument();
  });

  test('has link to Community', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    expect(screen.getByRole('link', { name: /community/i })).toBeInTheDocument();
  });
});
