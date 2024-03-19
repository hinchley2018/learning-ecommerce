import { getProducts } from "./api";

// how you test the async function in jest
// use mock?

describe("getProducts", () => {
  test("should able to return an array of products", async () => {
    const products = await getProducts();

    expect(products).toBeInstanceOf(Array);
    expect(products).not.toBeNull();
  })
});