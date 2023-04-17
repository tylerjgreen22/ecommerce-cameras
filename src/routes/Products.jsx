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
        <h2 className="products--title">Our Products</h2>
        <div className="products--wrapper">
          <div className="products--text">
            <p>
              At Kling-Wolf Camera Co. we strive to provide the best quality
              cameras and accesories for our patrons. To that end, all of our
              equipment has been properly checked by master photographers to
              ensure the utmost quality for the latest addition to your camera
              collection. Please shop our choice selection below.
            </p>
            <br />
            <br />
            <p>
              At Kling-Wolf Camera Co. we strive to provide the best quality
              cameras and accesories for our patrons. To that end, all of our
              equipment has been properly checked by master photographers to
              ensure the utmost quality for the latest addition to your camera
              collection. Please shop our choice selection below.
            </p>
          </div>
          <img className="products--picture" src={picture} alt="" />
        </div>
        <h2 className="products--title">Cameras</h2>
        <section className="products">{productElements}</section>
      </div>
      <Footer />
    </div>
  );
}

export default Products;
