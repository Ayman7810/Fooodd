/** @format */

import React, { useState } from "react";

const NavBar = ({ filterCategorySearch }) => {
  const [valueInput, setValueInput] = useState("");

  const onSearch = () => {
    filterCategorySearch(valueInput);
    console.log(valueInput);
    setValueInput('')
  };
  return (
    <nav className="navbar navbar-expand-lg text-white bg-dark">
      <div className="container">
        <a className="navbar-brand brand-color" href="#">
          مطعم فلان
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon text-white">list</span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <form className="d-flex me-auto">
            <input
              className="form-control me-2"
              type="search"
              placeholder="بحث"
              aria-label="Search"
              value={valueInput}
              onChange={(e) => {
                setValueInput(e.target.value);
              }}
            />
          </form>
            <button
              className="btn-search mx-2 p-2 px-3"
              type="submit"
              onClick={() => onSearch()}>
              إبحث
            </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
