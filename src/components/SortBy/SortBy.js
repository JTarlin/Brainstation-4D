import "./SortBy.scss";

export default function SortBy() {
    return (
    <div className="sortBar" >
        <ul className="list">
            <li>
                <div className="title">Sales</div>
            </li>
            <li>
                <div className="button">Sort by Time</div>
            </li>
            <li>
                <div className="button">Sort by Category</div>
            </li>
            <li>
                <div className="button">Sort by Vendor</div>
            </li>
            <li>
                <div className="button">Sort by Region</div>
            </li>
            <li>
                <div className="button">Sort by Brand</div>
            </li>
        </ul>
    </div>
    )
}