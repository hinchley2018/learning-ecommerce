// The code below currently checks if the products page renders
//checkout test case references below:
//https://docs.google.com/spreadsheets/d/1ZgzcCNs2psKi8dMQaAKqk_NgzjTyLb68jNUiuGTq5P4/edit#gid=0

import { screen, render, getByTestId } from "@testing-library/react";
import Product from "../products";

test("Products Page Rendered!!", () => {
  render(<Product />);
  const ProductElement = screen.getByTestId("products");
  expect(ProductElement).toBeInTheDocument();
});
