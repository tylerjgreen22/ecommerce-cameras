import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo2.png";

function Header() {
  const user = localStorage.getItem("user");
  const navigate = useNavigate();

  return (
    <header className="main-background-color">
      <div className="content-container" data-type="header-footer">
        <Link to={"/"}>
          <img src={logo} />
        </Link>

        <nav className="accent-color ">
          <NavLink
            to={"about"}
            className={({ isActive }) =>
              isActive
                ? "title-reg accent-color small-right-spacer hf-link-active"
                : "title-reg accent-color small-right-spacer hf-link"
            }
          >
            About
          </NavLink>
          <NavLink
            to={"products"}
            className={({ isActive }) =>
              isActive
                ? "title-reg accent-color small-right-spacer hf-link-active"
                : "title-reg accent-color small-right-spacer hf-link"
            }
          >
            Products
          </NavLink>
        </nav>

        {user ? (
          <Link to={"dashboard"}>
            <i className="accent-color fa-regular fa-user fa-3x"></i>
          </Link>
        ) : (
          <NavLink
            to={"login"}
            className={({ isActive }) =>
              isActive
                ? "title-reg accent-color hf-link-active"
                : "title-reg accent-color hf-link"
            }
          >
            Login/Signup
          </NavLink>
        )}
      </div>
    </header>
  );
}

export default Header;
