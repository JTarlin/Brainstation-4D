
import CategorySelect from "./CategorySelect/CategorySelect";
import SearchSort from "./SearchSort/SearchSort";

import Header from "./Header";

function PageOne() {
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <Header />
     <div style={{width: "650px"}}>
        <SearchSort />
        <CategorySelect />
     </div>
      
    </div>
  );
}

export default PageOne;
