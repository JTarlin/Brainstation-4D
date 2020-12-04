import "../App.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="main__header">
      <Link to="/">
        <img
          src={process.env.PUBLIC_URL + "/walmart.png"}
          className="header__logo"
        />
      </Link>
      <button className="main__button">Share</button>
    </header>
  );
}

export default Header;
