import { Link } from "react-router-dom";
import "./CategorySelect.scss";

export default function CategorySelect() {
    return (
      <div className="cardContainer"> 
        <Link to="/pagetwo" style={{textDecoration: "none"}}> 
            <div className="card">
                <span>Sales </span>
            </div>
        </Link>
        <Link to="/pagetwo" style={{textDecoration: "none"}}>
            <div className="card">
                <span>Units Sold </span>
            </div>
        </Link>
        <Link to="/pagetwo" style={{textDecoration: "none"}}>
            <div className="card">
                <span>Conversions </span>
            </div>
        </Link>
        <Link to="/pagetwo" style={{textDecoration: "none"}}>
            <div className="card">
                <span>KPI Track </span>
            </div>
        </Link>
      </div>
    );
  }