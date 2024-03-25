export default function Product() {
  const products = [
    {
      id: 1,
      name: 'Coffee mug',
      imageUrl:
        'https://images.pexels.com/photos/585753/pexels-photo-585753.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      description: 'A cup fit for a software engineer.',
      price: 4.99,
      stock: 4,
    },
  ];

  return (
    <div class='rounded-b-xl bg-white p-6' data-testid='products'>
      {products.map((product) => (
        <div key={product.id}>
          <p>Product #: {product.id}</p>
          <p>{product.name}</p>
          <img
            src={product.imageUrl}
            alt={product.description}
            style={{
              maxWidth: '100%',
              maxHeight: '150px',
              borderRadius: '10px',
            }}
          />
          <p>{product.description}</p>
          <p>Price: ${product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
}
