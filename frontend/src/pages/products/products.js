import { Product } from "../../components/Product";
export default function ProductsPage() {
  const products = [
    {
      id: 1,
      imageUrl:
        "https://images.pexels.com/photos/585753/pexels-photo-585753.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description: "A cup fit for a software engineer.",
      price: 4.99,
    },
  ];

  return (
    <div data-testid="products-page">
      <div className="rounded-b-xl bg-white p-6" data-testid="products">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
