import "./ProductCard.css";

function ProductCard() {
  return (
    <div className="product-card">
      <img
        className="product-image"
        src="../src/img/T-shirt.jpeg"
        alt="Product"
      />

      <h3 className="product-name">Áo thun nam</h3>

      <p className="product-price">199.000₫</p>

      <button className="add-to-cart">Add to cart</button>
    </div>
  );
}

export default ProductCard;
