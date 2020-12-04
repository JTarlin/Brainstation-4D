import { Link } from "react-router-dom";
import Header from "./Header";
import Aside from "./Aside";
function PageTwo() {
  return (
    <span>
      <Header />
      <div>
        <Link to="/">
          <span>PAGE ONE</span>
        </Link>
        <Link to="/pagethree">
          <span>PAGE THREE</span>
        </Link>
        <Aside />
      </div>
    </span>
  );
}

export default PageTwo;
