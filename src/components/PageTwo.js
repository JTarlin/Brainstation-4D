import { Link } from "react-router-dom";
import Header from "./Header";
import SearchSort from "./SearchSort/SearchSort";
import SortBy from "./SortBy/SortBy";
import Aside from "./Aside";
// import DataGraphs from
import graphs from "../assets/graphs.png";

function PageTwo() {
  return (
    <span>
      <Header />
      <div style={{ display: "flex" }}>
        <div style={{width: "25%"}}>
          <Aside/>
        </div>
        <div style={{width: "75%"}}>
          <SearchSort />
          <SortBy />
          <img src={graphs} />
          {/* <DataGraphs /> */}
        </div>
      </div>
    </span>
  );
}

export default PageTwo;
