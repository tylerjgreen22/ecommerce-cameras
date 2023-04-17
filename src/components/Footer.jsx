import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="content-container" data-type="footer">
        <div className="footer--link">
          <Link to="/">Kling-Wolf Camera Co.</Link>
        </div>
        <nav className="footer--nav">
          <a href="https://github.com/tylerjgreen22">
            <i class="fa-brands fa-github fa-2x"></i>
          </a>
          <a href="https://www.linkedin.com/in/tyler-green-b21767244/">
            <i class="fa-brands fa-linkedin fa-2x"></i>
          </a>
        </nav>
        <div className="footer--link">
          <Link to="/about">Contact Us</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
