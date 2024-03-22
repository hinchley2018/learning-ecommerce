// The code below currently checks if the home page renders
//checkout test case references below:
//https://docs.google.com/spreadsheets/d/1ZgzcCNs2psKi8dMQaAKqk_NgzjTyLb68jNUiuGTq5P4/edit#gid=0

import { render, screen, getByTestId } from '@testing-library/react';
import Home from './home';
import { BrowserRouter } from 'react-router-dom';

test('Home page rendered', () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>,
  );
  const HomeElement = screen.getByTestId('home');
  expect(HomeElement).toBeInTheDocument();
});
