// how do you setup the api file in frontend folder
const getProducts = async () => {
  try {
    const response = await fetch("http://localhost:3001/products");
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

    const products = await response.json();
    return products;
  } catch (error) {
    console.error(error);
  }
}

export { getProducts }