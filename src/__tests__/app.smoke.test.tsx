import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '@/App';

test('renders main app without crashing', () => {
  render(<App />);
  // Check that the navbar or a main heading is present
  const heading = screen.getByText(/Mumbai International Airport Authority/i);
  expect(heading).toBeInTheDocument();
});
