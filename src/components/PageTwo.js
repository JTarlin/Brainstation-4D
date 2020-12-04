import { Link } from "react-router-dom";
import Header from "./Header";
import SearchSort from "./SearchSort/SearchSort";
import SortBy from "./SortBy/SortBy";
// import DataGraphs from 

function PageTwo() {
  return (
    <span>
      <Header />
      <div style={{display: "flex"}}>
        <div></div>
        <div style={{width: "100%"}}>
          <SearchSort/>
          <SortBy />
          {/* <DataGraphs /> */}
        </div>
      </div>
    </span>
  );
}

export default PageTwo;
