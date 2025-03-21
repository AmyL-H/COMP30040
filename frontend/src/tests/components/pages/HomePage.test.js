// /tests/HomePage.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../pages/HomePage';
import { MemoryRouter } from 'react-router-dom';

describe('HomePage', () => {
  test('renders welcome text', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    expect(screen.getByText(/welcome to cyberiq/i)).toBeInTheDocument();
  });
});
