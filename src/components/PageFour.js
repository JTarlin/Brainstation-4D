import { Link } from "react-router-dom";

function PageFour() {
  return (
    <div>
      <Link to="/">
        <span>PAGE ONE</span>
      </Link>
      <Link to="/pagetwo">
        <span>PAGE TWO</span>
      </Link>
      <Link to="/pagethree">
        <span>PAGE THREE</span>
      </Link>
    </div>
  );
}

export default PageFour;
