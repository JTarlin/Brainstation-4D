import "./SearchSort.scss";

export default function SearchSort() {
    return (
    <div className="navBar">
        <ul className="navList">
            <li>
                <input type="text" placeholder="Search..." className="search"></input>
            </li>
            <li>Sort by Time</li>
            <li>Sort by Category</li>
            <li>Sort by Vendor</li>
        </ul>

    </div>
    )
}