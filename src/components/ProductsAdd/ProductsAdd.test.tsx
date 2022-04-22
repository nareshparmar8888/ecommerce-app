import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductsAdd from './ProductsAdd';

describe('<ProductsAdd />', () => {
  test('it should mount', () => {
    render(<ProductsAdd />);
    
    const productsAdd = screen.getByTestId('ProductsAdd');

    expect(productsAdd).toBeInTheDocument();
  });
});