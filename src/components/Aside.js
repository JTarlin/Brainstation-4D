function Aside() {
  return (
    <aside className="left__column">
      <div className="aside_div">
        <img
          className="aside__icon"
          src={process.env.PUBLIC_URL + "/Vector.svg"}
        />
        <p className="aside__icon-title">Sales</p>
      </div>
      <div className="aside_div">
        <img
          className="aside__icon"
          src={process.env.PUBLIC_URL + "/Vector.svg"}
        />
        <p className="aside__icon-title">Units Sold</p>
      </div>
      <div>
        <img
          className="aside__icon"
          src={process.env.PUBLIC_URL + "/coin.svg"}
        />
        <p className="aside__icon-title">Conversions</p>
      </div>
      <div className="aside_div">
        <img
          className="aside__icon"
          src={process.env.PUBLIC_URL + "/graph.svg"}
        />
        <p className="aside__icon-title">KPI Tracking</p>
      </div>
    </aside>
  );
}
export default Aside;
