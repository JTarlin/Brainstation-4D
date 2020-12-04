import { Link } from "react-router-dom";
import "./CategorySelect.scss";
import asset1 from "../../assets/bx_bx-unite.svg";
import asset2 from "../../assets/si-glyph_money-coin.svg";
import asset3 from "../../assets/uil_file-graph.svg";
import asset4 from "../../assets/Vector.svg";

export default function CategorySelect() {
    return (
      <div className="cardContainer"> 
        <Link to="/pagetwo" style={{textDecoration: "none"}}> 
            <div className="card">
                <span>Sales </span>
                <img src={asset4} />
            </div>
        </Link>
        <Link to="/pagetwo" style={{textDecoration: "none"}}>
            <div className="card">
                <span>Units Sold </span>
                <img src={asset1} />
            </div>
        </Link>
        <Link to="/pagetwo" style={{textDecoration: "none"}}>
            <div className="card">
                <span>Conversions </span>
                <img src={asset2} />
            </div>
        </Link>
        <Link to="/pagetwo" style={{textDecoration: "none"}}>
            <div className="card">
                <span>KPI Track </span>
                <img src={asset3} />
            </div>
        </Link>
      </div>
    );
  }