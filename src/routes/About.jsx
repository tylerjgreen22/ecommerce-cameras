import "./About.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import imageOne from "../assets/semyon-borisov-qqmhc6_30aU-unsplash.jpg";
import imageTwo from "../assets/michael-soledad-8ikE18hSfrk-unsplash.jpg";

function About() {
  return (
    <div>
      <Header />
      <div className="content-container">
        <h2>Who we are</h2>
        <div className="about--wrapper">
          <img className="about--image" src={imageOne} />
          <div className="about--text">
            <p className="about--text">
              Our main goal is to help get out love of cameras and photography
              out to the world. We are a small team of passionate photographers
              looking to help consumers at home get access to high quality
              camera equipment that normally would only be avaliable from
              specialist stores. Our main goal is to help get out love of
              cameras and photography out to the world. We are a small team of
              passionate photographers looking to help consumers at home get
              access to high quality camera equipment that normally would only
              be avaliable from specialist stores.
            </p>
            <br />
            <br />
            <p>
              Our main goal is to help get out love of cameras and photography
              out to the world. We are a small team of passionate photographers
              looking to help consumers at home get access to high quality
              camera equipment that normally would only be avaliable from
              specialist stores. Our main goal is to help get out love of
              cameras and photography out to the world. We are a small team of
              passionate photographers looking to help consumers at home get
              access to high quality camera equipment that normally would only
              be avaliable from specialist stores.
            </p>
          </div>
        </div>

        <div className="contact--wrapper">
          <div className="contact--form">
            <h2>Contact Us</h2>
            <p>Questions? Get in touch with us via the form below</p>
            <form>
              <input type="text" placeholder="First Name" name="firstName" />
              <input type="text" placeholder="Last Name" name="lastName" />
              <textarea
                className="contact--text-area"
                placeholder="Comments"
                name="comments"
              />
            </form>
          </div>
          <img className="about--image" src={imageTwo} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
