import "./Product.css";
import { Link } from "react-router-dom";
import { imgUrl } from "../api/api";

function Product({ id, name, img, price, desc }) {
  return (
    <article className="shadow product--card">
      <Link to={`/products/${id}`}>
        <img src={`${imgUrl}/${img}`} alt="camera" className="product--image" />
        <div className="product--body">
          <div className="flex-space-between small-bottom-spacer">
            <h3 className="title-reg">{name}</h3>
            <span className="subtitle-bold">${price}</span>
          </div>
          <p className="small-text product--desc">{desc}</p>
        </div>
      </Link>
    </article>
  );
}

export default Product;
