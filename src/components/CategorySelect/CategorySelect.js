import { Link } from "react-router-dom";

export default function CategorySelect() {
    return (
      <div>
        <Link to="/pagetwo">
            <div>
                <span>Sales </span>
            </div>
        </Link>
        <Link to="/pagetwo">
            <div>
                <span>Units Sold </span>
            </div>
        </Link>
        <Link to="/pagetwo">
            <div>
                <span>Convversions </span>
            </div>
        </Link>
        <Link to="/pagetwo">
            <div>
                <span>KPI Track </span>
            </div>
        </Link>
      </div>
    );
  }