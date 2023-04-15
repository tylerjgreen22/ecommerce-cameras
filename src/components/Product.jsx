import camera from "../assets/math-InK0X-GDjrQ-unsplash.jpg";
import "./Product.css";

function Product({ name, img, price, desc }) {
  return (
    <article className="product--card">
      <img src={img} alt="camera" className="product--image" />
      <div className="product--body">
        <div className="product--title-wrapper">
          <h3 className="product--title">{name}</h3>
          <span className="product--price">${price}</span>
        </div>
        <p className="product--desc">{desc}</p>
      </div>
    </article>
  );
}

export default Product;
