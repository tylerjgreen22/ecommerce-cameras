import "./Home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Product from "../components/Product";
import Carousel from "react-bootstrap/Carousel";

function Home({ cameras }) {
  const saleElements = cameras.map((camera, idx) => {
    if (camera.sale) {
      return (
        <Product
          key={idx}
          name={camera.name}
          img={camera.img}
          price={camera.price}
          desc={camera.desc}
        />
      );
    }
  });

  const slideElements = cameras.map((camera, idx) => {
    if (camera.bestSeller) {
      return (
        <Carousel.Item>
          <img
            className="home--slide-img"
            src={camera.img}
            alt="best seller slide"
          />
          <Carousel.Caption>
            <h3 className="home--best-seller-slide-title">{`Best Seller: ${camera.name}`}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      );
    }
  });

  return (
    <div>
      <Header />
      <div className="content-container">
        <section className="home--best-sellers">
          <div>
            <h3 className="home--section-title">Best Sellers</h3>
            <p className="home--best-sellers-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <Carousel className="home--slider">
            {slideElements && slideElements}
          </Carousel>
        </section>
        <section className="home--sales">
          <h3 className="home--section-title">Sale Items</h3>
          <div className="home--products">{saleElements && saleElements}</div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
