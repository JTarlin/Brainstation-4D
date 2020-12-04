import { Link } from "react-router-dom";

function PageThree() {
  return (
    <div>
      <Link to="/">
        <span>PAGE ONE</span>
      </Link>
      <Link to="/pagetwo">
        <span>PAGE TWO</span>
      </Link>
      <Link to="/pagefour">
        <span>PAGE FOUR</span>
      </Link>
    </div>
  );
}

export default PageThree;
