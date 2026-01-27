import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

function ProductList() {
  return (
    <div className="product-list">
      {Array.from({ length: 6 }).map((_, i) => (
        <ProductCard key={i} />
      ))}
    </div>
  );
}

export default ProductList;
