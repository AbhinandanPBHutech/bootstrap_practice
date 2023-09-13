import React from "react";
import { FilterSquareFill, List } from "react-bootstrap-icons";

function Header() {
  return (
    <div className="row shadow d-flex ">
      <div className=" border pt-3 pb-3 w-25">
        <List />
      </div>
      <div className="col-lg-6 col-md-6 col-sm-6 w-50  border pt-3 pb-3">
        input
      </div>
      <div className="col-lg-3 col-md-3 col-sm-3 border d-flex align-items-center pt-3 pb-3 w-25">
        <FilterSquareFill /> Filter
      </div>
    </div>
  );
}

export default Header;
