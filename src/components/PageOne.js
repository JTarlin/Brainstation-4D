
import CategorySelect from "./CategorySelect/CategorySelect";
import SearchSort from "./SearchSort/SearchSort";

import Header from "./Header";
function PageOne() {
  return (
    <div>
      <Header />
      <SearchSort />
      <CategorySelect />
    </div>
  );
}

export default PageOne;
