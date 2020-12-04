import { Link } from "react-router-dom";
import Header from "./Header";
import SearchSort from "./SearchSort/SearchSort";
function PageTwo() {
  return (
    <span>
      <Header />
      <div style={{display: "flex"}}>
        <div></div>
        <div>
          <SearchSort/>
        </div>
      </div>
    </span>
  );
}

export default PageTwo;
