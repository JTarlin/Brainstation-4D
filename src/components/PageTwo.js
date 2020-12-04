import { Link } from "react-router-dom";

function PageTwo() {
  return (
    <div>
      <Link to="/">
        <span>PAGE ONE</span>
      </Link>
      <Link to="/pagethree">
        <span>PAGE THREE</span>
      </Link>
    </div>
  );
}

export default PageTwo;
