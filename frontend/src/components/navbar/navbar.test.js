import {
  getAllByText,
  getByTestId,
  render,
  fireEvent,
  screen,
} from '@testing-library/react';
import Navbar from './navbar';
import { BrowserRouter } from 'react-router-dom';
test('Navbar Rendered', () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );
  const navbarElement = screen.getByTestId('navbar');
  expect(navbarElement).toBeInTheDocument();
});

//test to check if search bar takes input
test('Search bar takes input', async () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );
  const searchElement = await screen.getAllByPlaceholderText(/Search/i);
  fireEvent.change(searchElement[0], { target: { value: 'Hello' } });
  expect(searchElement[0].value).toBe('Hello');
  fireEvent.change(searchElement[1], { target: { value: 'Hello1' } });
  expect(searchElement[1].value).toBe('Hello1');
});

//test to check if product link works
test('Product link works ', async () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );
  const productLinkElement = screen.getAllByText(/Product/i);
  fireEvent.click(productLinkElement[0]);
  expect(window.location.pathname).toBe('/products');
  fireEvent.click(productLinkElement[1]);
  expect(window.location.pathname).toBe('/products');
});

//test to check if cart link works
test('Cart link works', async () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );
  const cartLinkElement = screen.getAllByTestId('cart');
  fireEvent.click(cartLinkElement[0]);
  expect(window.location.pathname).toBe('/cart');
  fireEvent.click(cartLinkElement[1]);
  expect(window.location.pathname).toBe('/cart');
});

//test to check if Logo link works
test('Logo link works', async () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );
  window.location.pathname = '/cart';
  const logoLinkElement = screen.getAllByText(/WebsiteLogo/i);
  fireEvent.click(logoLinkElement[0]);
  expect(window.location.pathname).toBe('/');
  fireEvent.click(logoLinkElement[1]);
  expect(window.location.pathname).toBe('/');
});
