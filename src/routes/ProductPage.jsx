import { useLoaderData } from "react-router-dom";
import Product from "../components/Product";
import { getProduct, getProducts } from "../api/api";

export async function loader(id) {
  const camerasData = await getProducts();
  const cameraData = await getProduct(id);
  return [camerasData, cameraData];
}

function ProductPage() {
  const cameras = useLoaderData()[0];
  const camera = useLoaderData()[1][0];

  function addToCart() {
    const cart = localStorage.getItem("cart");
    if (cart) {
      const data = JSON.parse(cart);
      data.push(camera.id);
      localStorage.setItem("cart", JSON.stringify(data));
    } else {
      localStorage.setItem("cart", JSON.stringify([camera.id]));
    }
  }

  const recommendedElements = cameras.map((cam, idx) => {
    if (
      cam.category === camera.category &&
      cam.productname !== camera.productname
    ) {
      return (
        <Product
          key={idx}
          id={cam.id}
          name={cam.productname}
          img={cam.img}
          price={cam.price}
          desc={cam.productdesc}
        />
      );
    }
  });

  return (
    <section>
      <article className="flex large-bottom-spacer">
        <div>
          <h2 className="title small-bottom-spacer">{camera.productname}</h2>
          <p className="text-indent large-bottom-spacer">
            {camera.productdesc}
          </p>
          <p className="subtitle-bold">${camera.price}</p>
          <button className="button" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
        <img
          className="image-large shadow"
          src={`http://localhost:3000/assets/${camera.img}`}
        />
      </article>

      <article>
        <h2 className="title small-bottom-spacer">You might also like</h2>
        <div className="grid">{recommendedElements}</div>
      </article>
    </section>
  );
}

export default ProductPage;
