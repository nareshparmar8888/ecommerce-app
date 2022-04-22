import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductsDetails from './ProductsDetails';

describe('<ProductsDetails />', () => {
  test('it should mount', () => {
    render(<ProductsDetails />);
    
    const productsDetails = screen.getByTestId('ProductsDetails');

    expect(productsDetails).toBeInTheDocument();
  });
});