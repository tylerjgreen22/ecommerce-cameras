import "./Products.css";
import Header from "../components/Header";
import Product from "../components/Product";
import Footer from "../components/Footer";
import picture from "../assets/nordwood-themes-F3Dde_9thd8-unsplash (1).jpg";

function Products({ cameras }) {
  const productElements = cameras.map((camera, idx) => {
    return (
      <Product
        key={idx}
        name={camera.name}
        img={camera.img}
        price={camera.price}
        desc={camera.desc}
      />
    );
  });

  return (
    <div>
      <Header />
      <div className="content-container">
        <img className="products--camera" src={picture} alt="" />
        <section className="products">{productElements}</section>
      </div>
      <Footer />
    </div>
  );
}

export default Products;
