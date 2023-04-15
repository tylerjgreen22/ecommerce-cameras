import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo2.png";

function Header() {
  return (
    <header>
      <div className="content-container" data-type="header">
        <Link className="header--title" to={"/"}>
          <img src={logo} />
        </Link>
        <nav className="header--nav">
          <Link to={"/about"}>About</Link>
          <Link to={"/products"}>Products</Link>
        </nav>
        <i className="fa-regular fa-user fa-3x"></i>
      </div>
    </header>
  );
}

export default Header;
