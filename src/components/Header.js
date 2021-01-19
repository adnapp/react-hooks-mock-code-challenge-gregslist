import React from "react";
import Search from "./Search";

function Header({handleSearch, handleSorted}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search handleSearch={handleSearch} handleSorted={handleSorted}/>
    </header>
  );
}

export default Header;
