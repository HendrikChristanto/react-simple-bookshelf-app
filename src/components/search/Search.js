import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { RiCloseCircleLine } from "react-icons/ri";

import "./search.css";

const Search = (props) => {
  const [activeIcon, setActiveIcon] = useState(false);

  const handleActiveIcon = (value) => {
    if (value.length > 0 && !activeIcon) {
      setActiveIcon(true);
    }
    if (value.length === 0 && activeIcon) {
      setActiveIcon(false);
    }
  };

  return (
    <section className="search">
      <div className="container search__container">
        <div className="search__form">
          <FiSearch size="1.5rem" />
          <div className="search__field">
            <input
              type="text"
              placeholder="Search for a book..."
              value={props.searchText}
              onChange={(event) => {
                props.handleSearchText(event.target.value);
                handleActiveIcon(event.target.value);
              }}
            />
            <RiCloseCircleLine
              className={activeIcon ? "icon active-icon" : "icon"}
              size="1.3rem"
              onClick={() => {
                props.handleSearchText("");
                handleActiveIcon("");
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
