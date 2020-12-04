import { Link } from "react-router-dom";
import CategorySelect from "./CategorySelect/CategorySelect";

import Header from "./Header";
function PageOne() {
  return (
    <div>
      <Header />
      <Link to="/pagetwo">
        <span>PAGE TWO </span>
      </Link>
      <CategorySelect />
    </div>
  );
}

export default PageOne;
