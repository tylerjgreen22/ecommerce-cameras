import imageOne from "../assets/semyon-borisov-qqmhc6_30aU-unsplash.jpg";
import imageTwo from "../assets/michael-soledad-8ikE18hSfrk-unsplash.jpg";

function About() {
  return (
    <section>
      <h2 className="title small-bottom-spacer">Who we are</h2>
      <article className="flex large-bottom-spacer">
        <img className="image" src={imageOne} />
        <div className="text-indent">
          <p className="large-bottom-spacer">
            Our main goal is to help get out love of cameras and photography out
            to the world. We are a small team of passionate photographers
            looking to help consumers at home get access to high quality camera
            equipment that normally would only be avaliable from specialist
            stores. Our main goal is to help get out love of cameras and
            photography out to the world. We are a small team of passionate
            photographers looking to help consumers at home get access to high
            quality camera equipment that normally would only be avaliable from
            specialist stores.
          </p>
          <p>
            Our main goal is to help get out love of cameras and photography out
            to the world. We are a small team of passionate photographers
            looking to help consumers at home get access to high quality camera
            equipment that normally would only be avaliable from specialist
            stores. Our main goal is to help get out love of cameras and
            photography out to the world. We are a small team of passionate
            photographers looking to help consumers at home get access to high
            quality camera equipment that normally would only be avaliable from
            specialist stores.
          </p>
        </div>
      </article>

      <h2 className="title small-bottom-spacer">Contact Us</h2>
      <article className="text flex-space-between">
        <div>
          <p className="small-bottom-spacer">
            Questions? Get in touch with us via the form below
          </p>
          <form className="flex-column">
            <input type="text" placeholder="First Name" name="firstName" />
            <input type="text" placeholder="Last Name" name="lastName" />
            <input type="email" placeholder="Email" name="email" />
            <textarea
              className="textbox"
              placeholder="Comments"
              name="comments"
            />
            <button className="button">Submit</button>
          </form>
        </div>
        <img className="image" src={imageTwo} />
      </article>
    </section>
  );
}

export default About;
