// The code below currently checks if the app renders.
//checkout test case references below:
//https://docs.google.com/spreadsheets/d/1ZgzcCNs2psKi8dMQaAKqk_NgzjTyLb68jNUiuGTq5P4/edit#gid=0

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const AppElement = screen.getByTestId('app');
  expect(AppElement).toBeInTheDocument();
});
