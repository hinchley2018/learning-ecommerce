export function Product(props) {
  let { product } = props;
  return (
    <div key={product.id}>
      <p>Product #: {product.id}</p>
      <img
        src={product.imageUrl}
        alt={product.description}
        style={{
          maxWidth: "100%",
          maxHeight: "150px",
          borderRadius: "10px",
        }}
      />
      <p>{product.description}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
    </div>
  );
}
