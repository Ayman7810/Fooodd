/** @format */

import React from "react";

const Categories = ({filterCategory , allCategories}) => {
    // console.log(allCategories)
    const onFlter = (cat) => {
        filterCategory(cat)
    }
  return (
    <div className="row mb-4">
      <div className="col-12 d-flex justify-content-center ">
        {
            allCategories.map((cat ,i)=>{
                return (
                    <button key={i} type="button" className="btn btn-outline-danger mx-1 mt-4" onClick={()=>onFlter(cat)}>
                    {cat}
                  </button>
                )
            })
        }
      </div>
    </div>
  );
};

export default Categories;
