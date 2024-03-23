// The code below currently checks if the cart page renders
//checkout test case references below:
//https://docs.google.com/spreadsheets/d/1ZgzcCNs2psKi8dMQaAKqk_NgzjTyLb68jNUiuGTq5P4/edit#gid=0

import { getByTestId, render, screen } from '@testing-library/react';
import Cart from './cart';

test('Cart Page rendered', () => {
  render(<Cart />);
  const CartElement = screen.getByTestId('cart');
  expect(CartElement).toBeInTheDocument();
});
