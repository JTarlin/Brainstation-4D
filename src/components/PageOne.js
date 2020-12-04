import { Link } from "react-router-dom";
import CategorySelect from "./CategorySelect/CategorySelect";

function PageOne() {
  return (
    <div>
      <Link to="/pagetwo">
        <span>PAGE ONE </span>
      </Link>
      <CategorySelect />
    </div>
  );
}

export default PageOne;
