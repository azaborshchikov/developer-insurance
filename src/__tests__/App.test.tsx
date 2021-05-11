import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('renders App', () => {
  test('render start flow links', () => {
    render(<App/>);
    const linkElements = screen.getAllByText(/Get started/i);
    expect(linkElements.length).toBe(2);
    linkElements.forEach(el => {
      expect(el).toBeInTheDocument();
    });
  });
});
