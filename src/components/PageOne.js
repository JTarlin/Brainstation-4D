import { Link } from "react-router-dom";

function PageOne() {
  return (
    <div>
      <Link to="/pagetwo">
        <span>PAGE ONE </span>
      </Link>
    </div>
  );
}

export default PageOne;
