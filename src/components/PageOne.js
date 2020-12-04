import { Link } from "react-router-dom";
import Header from "./Header";
function PageOne() {
  return (
    <div>
      <Header />
      <Link to="/pagetwo">
        <span>PAGE TWO </span>
      </Link>
    </div>
  );
}

export default PageOne;
