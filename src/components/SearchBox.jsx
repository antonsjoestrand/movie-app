import React from "react";

const SearchBox = (props) => {
  return (
    <div>
      <input className='form-control' placeholder='Search Movies...' value={props.value} onChange={(event) => props.setSearchValue(event.target.value)} />
    </div>
  );
};

export default SearchBox;
